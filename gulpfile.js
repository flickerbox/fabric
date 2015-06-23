"use strict";


var gulp             = require("gulp"),
	uglify           = require("gulp-uglify"),
	sass             = require("gulp-ruby-sass"),
	autoprefixer     = require("gulp-autoprefixer"),
	plumber          = require("gulp-plumber"),
	notify           = require("gulp-notify"),
	sourcemaps       = require("gulp-sourcemaps"),
	path             = require("path"),
	folders          = require("gulp-folders"),
	rename           = require("gulp-rename");
	

var cssSource        = "source/sass",
	jsSource         = "source/javascript",
	cssDestination   = "css",
	jsDestination    = "js";
	

// Error messaging
var onError = function(err) {
	
	notify.onError({
		title:    "Gulp Error",
		message:  "<%= error.message %>",
	})(err);

	this.emit("end");
	
};


// Uglifies / minifies JS
gulp.task("scripts", function() {
	
	return gulp.src(jsSource + "/**/*.js")
		.pipe(rename({
            suffix: ".min"
        }))
		.pipe(sourcemaps.init())
		.pipe(plumber({errorHandler: onError}))
		.pipe(uglify())
		.pipe(sourcemaps.write("./", {
			sourceRoot: jsSource,
			includeContent: false
		}))
		.pipe(gulp.dest(jsDestination));
		
});


// Styles Task
gulp.task("styles", function() {
	
	return sass(cssSource, {
			compass: true,
			sourcemap: true,
			noCache: false,
			style: "compressed"
		})
		.on("error", onError)
		.pipe(autoprefixer())
		.pipe(sourcemaps.write("./", {
			sourceRoot: cssSource,
			includeContent: false
		}))
		.pipe(gulp.dest(cssDestination));
	
});


// Watches for changes
gulp.task("watch", function() {
	
 	gulp.watch(jsSource + "/**/*.js", ["scripts"]);
 	gulp.watch(cssSource + "/**/*.scss", ["styles"]);
 	
});


// Initialization
gulp.task("default", ["scripts", "styles", "watch"]);