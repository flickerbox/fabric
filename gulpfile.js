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
	

var _source			= "source",
	_build			= "build",
	_dist			= "dist",
	_css			= "css",
	_js				= "js";
	

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
	
	gulp.src(_source+"/"+_js+"/**/*.js")
		.pipe(sourcemaps.init())
		.pipe(plumber({errorHandler: onError}))
		.pipe(sourcemaps.write("./", {
			sourceRoot: _source+"/"+_js,
			includeContent: false
		}))
		.pipe(gulp.dest(_build+"/"+_js));
	
	gulp.src(_source+"/"+_js+"/**/*.js")
		.pipe(rename({
            suffix: ".min"
        }))
		.pipe(sourcemaps.init())
		.pipe(plumber({errorHandler: onError}))
		.pipe(uglify())
		.pipe(sourcemaps.write("./", {
			sourceRoot: _source+"/"+_js,
			includeContent: false
		}))
		.pipe(gulp.dest(_dist+"/"+_js));
		
});


// Styles Task
gulp.task("styles", function() {
	
	sass(_source+"/"+_css, {
			compass: true,
			sourcemap: true,
			noCache: false,
			style: "compressed"
		})
		.on("error", onError)
		.pipe(autoprefixer())
		.pipe(sourcemaps.write("./", {
			sourceRoot: _source+"/"+_css,
			includeContent: false
		}))
		.pipe(gulp.dest(_build+"/"+_css));
	
	gulp.src(_source+"/"+_css+"/**/*.scss")
		.pipe(plumber({errorHandler: onError}))
		.pipe(gulp.dest(_dist+"/fabric"));
	
});


// Watches for changes
gulp.task("watch", function() {
	
 	gulp.watch(_source+"/"+_js+"/**/*.js", ["scripts"]);
 	gulp.watch(_source+"/"+_css+"/**/*.scss", ["styles"]);
 	
});


// Initialization
gulp.task("default", ["scripts", "styles", "watch"]);