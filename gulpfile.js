'use strict';


// look in package.json for the full list of plugins
var node,
	browserify 		= require('browserify'),
	buffer 			= require('vinyl-buffer'),
	glob 			= require('glob'),
	gulp 			= require('gulp'),
	plugins 		= require('gulp-load-plugins')(),
	source 			= require('vinyl-source-stream'),
	postcss 		= require('gulp-postcss'),

// config stuff
	_src 			= './src/',
	_build 			= './',
	_task_list		= ['npm:update', 'livereload:cleanup', 'livereload:start', 'lint:styles', 'compile:scripts', 'compile:styles', 'compile:oldie', 'watch']
;



// Error Messaging
var onError = function(error) {

	plugins.notify.onError({
		title: 'Gulp Error',
		message: '<%= error.message %>',
	})(error);

	this.emit('end');

};



// Lint SCSS
gulp.task('lint:styles', function() {

	return gulp
		.src([
			_src + 'sass/base/**/*.scss',
			_src + 'sass/components/**/*.scss',
			_src + 'sass/pages/**/*.scss',
			_src + 'sass/master.scss'
		]).pipe(plugins.scssLint({
			config: './lint.yml'
		}));

});



// Compile Scripts
gulp.task('compile:scripts', function() {

	return browserify({
			entries: glob.sync(_src + 'js/**/*.js'),
			extensions: ['.js'],
			paths: ['./node_modules', _src + 'js']
		})
		.bundle()
		.on('error', onError)
		.pipe(source('master.js'))
		.pipe(buffer())
		.pipe(plugins.sourcemaps.init({
			loadMaps: true
		}))
		.pipe(plugins.uglify())
		.on('error', onError)
		.pipe(plugins.sourcemaps.write('./'))
		.pipe(gulp.dest(_build + 'js'))
		.pipe(plugins.livereload());

});



// Compile Styles
gulp.task('compile:styles', function() {

	return gulp
		.src(_src + 'sass/master.scss')
		.pipe(plugins.cssGlobbing({
			extensions: ['.scss']
		}))
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass({
			outputStyle: 'compressed'
		}))
		.on('error', onError)
		.pipe(plugins.autoprefixer({
			browsers: ['last 4 version', 'Explorer >= 8'],
			cascade: false
		}))
		.pipe(plugins.sourcemaps.write('./', {
			sourceRoot: _src + 'sass',
			includeContent: true
		}))
		.pipe(gulp.dest(_build + 'css'))
		.pipe(plugins.livereload());

});



// Watch package file for updates
gulp.task('npm:update', function() {

	var update = plugins.update();

	update.write({
		path: './package.json'
	});

	plugins.watch('./package.json').on('change', function(file) {

		if (file.type == 'changed') {

			update.write({
				path: './package.json'
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



// converts modern css to older ie compatible css
gulp.task('compile:oldie', function () {
    return gulp.src('./css/*.css').pipe(
        postcss([
            require('oldie')({ /* options */ })
        ])
    ).pipe(
        gulp.dest('./css/ie')
    );
});


// Watches for changes
gulp.task('watch', function() {

	plugins.watch(_src + 'sass/**/*.scss', function() {

		gulp.run(['lint:styles', 'compile:styles']);

	});

	plugins.watch('./css/master.css', ['compile:oldie']);

	plugins.watch(_src + 'js/**/*.js', function() {

		gulp.run(['compile:scripts']);

	});

	plugins.watch('./**/*.php').on('change', plugins.livereload.changed);

});


// Initialization
gulp.task('default', _task_list);



// clean up if an error goes unhandled.
process.on('exit', function() {
	if (node) node.kill();
})
