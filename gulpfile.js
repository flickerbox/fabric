'use strict';


var gulp			= require('gulp'),
	plugins			= require('gulp-load-plugins')()
;
	

// Error Messaging
var onError = function(err) {
	
	plugins.notify.onError({
		title:    'Gulp Error',
		message:  '<%= error.message %>',
	})(err);

	this.emit('end');
	
};


// Lint SCSS
gulp.task('lint:styles', function() {

	gulp.src([
		'./source/sass/base/**/*.scss',
		'./source/sass/components/**/*.scss',
		'./source/sass/pages/**/*.scss',
		'./source/sass/master.scss'
	]).pipe(plugins.scssLint({
		config: 'lint.yml'
	}));

});


// Compile Scripts
gulp.task('compile:scripts', function() {

	gulp.src('./source/js/**/*.js')
		.pipe(plugins.plumber({errorHandler: onError}))
		.pipe(plugins.uglify())
		.pipe(plugins.concat('master.js'))
		.pipe(gulp.dest('./js'));

});


// Compile Styles
gulp.task('compile:styles', function() {

	gulp.src('./source/sass/master.scss')
		.pipe(plugins.cssGlobbing({
			extensions: ['.scss']
		}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass({
			outputStyle: 'compressed'
		}))
		.on('error', onError)
		.pipe(plugins.autoprefixer())
		.pipe(plugins.sourcemaps.write('./', {
			sourceRoot: './sass',
			includeContent: true
		}))
		.pipe(gulp.dest('./css'));
	
});


gulp.task('npm:update', function() {
	
	var update = plugins.update();
	
	gulp.watch('./package.json').on('change', function(file) {
		
		update.write(file);
		
	});
	
});


// Watches for changes
gulp.task('watch', function() {
	
 	gulp.watch('./sass/**/*.scss', ['lint:styles', 'compile:styles']);
 	
});


// Initialization
gulp.task('default', ['npm:update', 'lint:styles', 'compile:scripts', 'compile:styles', 'watch']);