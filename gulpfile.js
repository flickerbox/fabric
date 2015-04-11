//---------------------------------------------------------
// Flickerbox's Gulpfile
//---------------------------------------------------------
//
// If you want live reload to work, you must install the livereload extension for chrome
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
//
'use strict';

var gulp =             require('gulp'),
	uglify =           require('gulp-uglify'),
	sass =             require('gulp-ruby-sass'),
	autoprefixer =     require('gulp-autoprefixer'),
	plumber =          require('gulp-plumber'),
	notify =           require('gulp-notify'),
	sourcemaps =       require('gulp-sourcemaps'),
	livereload =       require('gulp-livereload'),
	imagemin =         require('gulp-imagemin'),
	jpegoptim =        require('imagemin-jpegoptim'),
	pngquant =         require('imagemin-pngquant');

var srcDir =           '_src',
	jsSource =         'scripts',
	jsDestination =    '_js',
	cssSource =        'styles',
	cssDestination =   '_css',
	imageSource =      'media',
	imageDestination = '_media';

// this is the error shown using plumber and notify:
var onError = function(err) {
	notify.onError({
		title:    "Gulp Error",
		message:  "<%= error.message %>",
	})(err);

	this.emit('end');
};

// Uglifies / minifies JS
gulp.task('scripts', function() {
	gulp.src( srcDir + '/' + jsSource + '/*.js' )
		.pipe(plumber({errorHandler: onError}))
		.pipe(uglify())
		.pipe(gulp.dest(jsDestination))
		.pipe(livereload()); // run livereload on js changes
});

// Styles Task
gulp.task('styles', function(event) {
	return sass( srcDir + '/' + cssSource + '/', {
		sourcemap: true,
		noCache: false, 	// default = false. saves ~10% runtime but stores in a .sass-cache folder.
		style: 'compressed'
	})
	.on('error', onError)
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('./', {
		sourceRoot: srcDir + '/' + cssSource,  //
		includeContent: false 		// default is true, which includes the entire css in the sourcemap
	}))
	.pipe(gulp.dest(cssDestination))
	.pipe(livereload()); // run livereload on css changes
});

// Image compression is off by default but is included. You can access by running `gulp images`
// or add it to the `default` gulp task at the bottom.
gulp.task('images', function() {
	return gulp.src( srcDir + '/' + imageSource + '/**/*.{png,jpg,jpeg}' )
	.pipe(jpegoptim( {
		max: 70
	})())
	.pipe(pngquant( {
		quality: '65-80',
		speed: 4
	})())
	.pipe(gulp.dest(imageDestination));
});

gulp.task('watch', function() {
	livereload.listen(); // start the livereload server
	gulp.watch(srcDir + '/' + jsSource + '/**/*.js', ['scripts']);
	gulp.watch(srcDir + '/' + cssSource + '/**/*.scss', ['styles']);
	gulp.watch(['**/*.{html,php,inc}'], function(event) {
		livereload.changed(event.path); // run livereload on the file
	});

});

gulp.task('default', ['scripts', 'styles', 'watch']);
