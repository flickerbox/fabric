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
	concat = 		   require('gulp-concat');

var srcDir =           '_src',
	jsSource =         'scripts',
	jsDestination =    '_js',
	cssSource =        'styles',
	cssDestination =   '_css',
	jsLibraries = 	   srcDir + '/' + jsSource +'/scraps/'; // source of Scraps folder

// there are the folder names of the libararies we want to include
var libraries = ['pacnav','test'];

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

gulp.task('libs', function(){

	for(var i in libraries){
		libraries[i] = jsLibraries + libraries[i] + '/*.js';
	}

	gulp.src(libraries)
		.pipe(plumber({errorHandler: onError }))
		.pipe(concat('libs.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsDestination));
});

// Styles Task
gulp.task('styles', function() {
	return sass( srcDir + '/' + cssSource + '/', {
		sourcemap: true,
		noCache: false,   // default = false. saves ~10% runtime but stores in a .sass-cache folder.
		style: 'compressed'
	})
	.on('error', onError)
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('./', {
		sourceRoot: srcDir + '/' + cssSource,  //
		includeContent: false 		// default is true, which includes the entire css in the sourcemap
	}))
	.pipe(gulp.dest(cssDestination));
});

gulp.task('watch', function() {
 	gulp.watch(srcDir + '/' + jsSource + '/**/*.js', ['scripts']);
 	gulp.watch(srcDir + '/' + cssSource + '/**/*.scss', ['styles']);
 	livereload.listen(); // start the livereload server
 	gulp.watch(['**/*.html','**/*.php', '**/*.inc', cssDestination + '/master.css' ], function(event) {
 		livereload.changed(event.path); // run livereload on the file
 	});
// 
 });

gulp.task('default', [ 'libs', 'scripts', 'styles', 'watch' ]);