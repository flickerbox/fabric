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
		'src/sass/base/**/*.scss',
		'src/sass/components/**/*.scss',
		'src/sass/pages/**/*.scss',
		'src/sass/master.scss'
	]).pipe(plugins.scssLint({
		config: 'lint.yml'
	}));

});



// Compile Scripts
gulp.task('compile:scripts', function() {

	gulp.src('src/js/**/*.js')
		.pipe(plugins.plumber({errorHandler: onError}))
		.pipe(plugins.uglify())
		.pipe(plugins.concat('master.js'))
		.pipe(gulp.dest('build/js'))
		.pipe(plugins.livereload());

});



// Compile Styles
gulp.task('compile:styles', function() {

	gulp.src('src/sass/master.scss')
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
			sourceRoot: 'src/sass',
			includeContent: true
		}))
		.pipe(gulp.dest('build/css'))
		.pipe(plugins.livereload());
	
});



// Watch package file for updates
gulp.task('npm:update', function() {
	
	var update = plugins.update();
	
	update.write({
		path: 'package.json'
	});
	
	gulp.watch('package.json').on('change', function(file) {
		
		if (file.type =='changed') {
					
			update.write({
				path: 'package.json'
			});
			
		}
		
	});
	
});



// Setup livereload
gulp.task('livereload:cleanup', plugins.shell.task([
	'LRPID=`lsof -n -i4TCP:35729 | grep LISTEN | awk \'{print $2}\'`' + "\n" +
	'if [ $LRPID ]' + "\n" +
	'	then' + "\n" +
	'	kill -9 $LRPID' + "\n" +
	'fi' + "\n"
]));



// Setup livereload
gulp.task('livereload:start', function() {
	
	plugins.livereload.listen();
	
});



// Watches for changes
gulp.task('watch', function() {
	
	gulp.watch('src/sass/**/*.scss', ['lint:styles', 'compile:styles']);
	gulp.watch('src/js/**/*.js', ['compile:scripts']);
	
	gulp.watch(['src/**/*.*']).on('change', plugins.livereload.changed);
 	
});



// Initialization
gulp.task('default', ['npm:update', 'livereload:cleanup', 'livereload:start', 'lint:styles', 'compile:scripts', 'compile:styles', 'watch']);



// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill();
})
