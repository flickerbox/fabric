// very important to put /*# sourceMappingURL=master.css.map */ as the first line of the master.scss
//
// If you want live reload to work, you must install the livereload extension for chrome
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
//
'use strict';

var gulp = 			require('gulp'),
	uglify = 		require('gulp-uglify'),
	sass = 			require('gulp-ruby-sass'),
	autoprefixer = 	require('gulp-autoprefixer'),
	plumber = 		require('gulp-plumber'),
	notify = 		require('gulp-notify'),
	concat = 		require('gulp-concat'),
	sourcemaps = 	require('gulp-sourcemaps'),
	livereload = 	require('gulp-livereload'),
	imagemin = 		require('gulp-imagemin'),
	jpegoptim = 	require('imagemin-jpegoptim'),
	pngquant = 		require('imagemin-pngquant');

var srcDir = 			'_src',
	jsSource = 			'scripts',
	jsDestination = 	'_js',
	cssSource = 		'styles',
	cssDestination = 	'_css',
	imageSource = 		'_src/media',
	imageDestination = 	'_media';

// this is the error shown using plumber and notify:
var onError = function(err) {
	notify.onError({
		title:    "Gulp Error",
		message:  "<%= error.message %>",
	})(err);

	this.emit('end');
};

// Uglifies a.k.a. minifies JS
gulp.task('scripts', function() {
	gulp.src(srcDir + '/' + jsSource + '/*.js')
		.pipe(plumber({errorHandler: onError}))
		.pipe(uglify())
		.pipe(gulp.dest(jsDestination))
		.pipe(livereload()); // run livereload on js changes
});

// Styles Task
gulp.task('styles', function() {
	return sass (
		srcDir + '/' + cssSource + '/', {
			sourcemap: true,
			noCache: true,
			style: 'compressed'
		}
	)
	.on('error', onError)
	.pipe(concat('master.css'))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('../' + cssDestination +'/',{ 
		sourceRoot: '_src/styles',
		includeContent: false 
	}))
	.pipe(gulp.dest(cssDestination));
});

/*
**  Image compression is off by default but is included. You can access by running `gulp images` 
**  or add it to the `default` gulp task at the bottom.
*/
gulp.task('images', function() {
  return gulp.src(imageSource+'/**/*.{png,jpg,jpeg}')
  	.pipe(jpegoptim({
  		max: 70
  	})())
  	.pipe(pngquant({
  		quality: 	'65-80',
  		speed: 		4
  		})())
    .pipe(gulp.dest(imageDestination));
});

gulp.task('watch', function () {
	
	gulp.watch(srcDir + '/' + jsSource + '/**/*.js', ['scripts']);
	gulp.watch(srcDir + '/' + cssSource + '/*.scss', ['styles']);
	livereload.listen();
	gulp.watch(['**/*.html','**/*.php', cssDestination + '/master.css' ], function(event) {
		livereload.changed(event.path); 
	});

});


gulp.task('default', ['scripts', 'styles', 'watch']);
