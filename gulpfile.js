//
// very important to put /*# sourceMappingURL=master.css.map */ as the first line of the master.scss
//
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	livereload = require('gulp-livereload');

// this is the error shown using plumber and notify:
var onError = function(err) {
	notify.onError({
		title:    "Gulp Error",
		message:  "<%= error.message %>",
	})(err);

	this.emit('end');
};
// Scripts Task
// Uglifies
gulp.task('scripts', function() {
	gulp.src('_src/scripts/*.js')
		.pipe(plumber({errorHandler: onError}))
		.pipe(uglify())
		.pipe(gulp.dest('_js'))
		.pipe(livereload()); // run livereload on js changes
});

// Styles Task
gulp.task('styles', function() {
	return sass (
		'_src/styles/', {
			style:'compressed', // this is so each created css is on its own line for sourcemapping
			// style:'compact', // this is so each created css is on its own line for sourcemapping
			// sourcemap: true, // this line must be here in order for...
			// sourcemapPath: '_src/scss' // ...this line to be read
			// however, it gives a deprecated error. It's really only used for
			// web developer tools to know where the original files are
		}
	)
	.on('error', onError)
	// .pipe(autoprefixer({
	// 	// browsers: ['last 2 versions', 'ie 9'],
	// 	cascade: false
	// }))
	// .pipe(gulp.dest('css'))
	.pipe(sourcemaps.init())
	.pipe(autoprefixer())
	.pipe(concat('master.css'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('_css'))
	.pipe(livereload()) // run livereload on sass changes
});

gulp.task('livereload', function() {
	livereload({start: true});

	var livereloadPage = function () {
		// Reload the whole page
		livereload.reload();
	};
});
gulp.task('watch', function () {
	// this writes the error message to the screen:
	var server = livereload();

	gulp.watch('_src/scripts/**/*.js', ['scripts']);
	gulp.watch('_src/styles/**/*.scss', ['styles']);

	// Watch any files in current dir, reload on change
	gulp.watch('[**/*.html,**/*.php]', function(event) {
		var filePath = event.path.replace(/\\/g, '/');
		livereload.changed(filePath);
	});
});

gulp.task('default', ['scripts', 'styles', 'livereload', 'watch']);
