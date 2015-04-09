//
// very important to put /*# sourceMappingURL=master.css.map */ as the first line of the master.scss
//
// If you want live reload to work, you must install the livereload extension for chrome
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
//
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
	jpegoptim = 		require('imagemin-jpegoptim');

var srcDir = 			'src',
	jsDestination = 	'js',
	cssDestination = 	'css',
	sassSource = 		'scss',
	jsSource = 			'js',
	imageSource = 		'src/images',
	imageDestination = 	'images';

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
	gulp.src(srcDir+'/'+jsSource+'/*.js')
		.pipe(plumber({errorHandler: onError}))
		.pipe(uglify())
		.pipe(gulp.dest(jsDestination))
		.pipe(livereload()); // run livereload on js changes
});

// Styles Task
gulp.task('styles', function() {
	return sass (
		srcDir+'/'+sassSource+'/', {
			style:'compressed', // this is so each created css is on its own line for sourcemapping
			// style:'compact', // this is so each created css is on its own line for sourcemapping
			// sourcemap: true, // this line must be here in order for...
			// sourcemapPath: 'src/scss' // ...this line to be read
			// however, it gives a deprecated error. It's really only used for
			// web developer tools to know where the original files are
		}
	)
	.on('error', onError)
	// .pipe(autoprefixer({
	// 	// browsers: ['last 2 versions', 'ie 9'],
	// 	cascade: false
	// }))
	// .pipe(gulp.dest(cssDestination))
	.pipe(sourcemaps.init())
	.pipe(autoprefixer())
	.pipe(concat('master.css'))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(cssDestination)); // run livereload on sass changes
});

// this function handles image optimization
gulp.task('images', function() {
  return gulp.src(imageSource+'/**/*')
    .pipe(jpegoptim({max: 70}))
    .pipe(gulp.dest(imageDestination));
});

gulp.task('watch', function () {
	
	gulp.watch(srcDir+'/'+jsSource+'/**/*.js', ['scripts']);
	gulp.watch(srcDir+'/'+sassSource+'/*.scss', ['styles']);
	gulp.watch(imageSource+'*.jpg', ['images']);
	livereload.listen();
	gulp.watch(['**/*.html','**/*.php','**/*.css'], function(event) {
		livereload.changed(event.path);
	}); 

});


gulp.task('default', ['scripts', 'styles', 'watch', 'images']);
