'use strict';

var gulp = 			require('gulp'),
	request = 		require("request");

var html = "https://api.github.com/repos/flickerbox/scraps/contents/"
var usePackages = [
		'pacnav',
		'test'
	];
var downloads = [];

// pull JS packages from remote repo
gulp.task('pull', function(){
		// for every dependency, get contents
		for(var i in usePackages){
			var result = request({ url: html + '/' + usePackages[i], headers : {"User-Agent":"flickerbox"} }, function( error, response, body){
					for( var j in JSON.parse(body) ){
						downloads.push( JSON.parse(body)[j]['download_url']);
					}
				});
		}
	});

gulp.task('default', ['pull']);