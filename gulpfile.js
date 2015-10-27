
"use strict";

let gulp = require("gulp");

let concatCss = require("gulp-concat-css");
let postcss = require("gulp-postcss");
let copyAssets = require('postcss-copy-assets');
let assetsRebase = require('postcss-assets-rebase');

gulp.task("default", function () {
	
	let src = [
		"bower_components/bootswatch/united/bootstrap.css"
	];
	
	gulp.src(src)
		.pipe(postcss([assetsRebase({ keepStructure: true, relative: true, assetsPath: "assets" })], { to: "public/build/all.css" }))
		.pipe(concatCss("all.css"))
		.pipe(gulp.dest("public/build"));
		
	/*gulp.src(src)
		.pipe(postcss([copyAssets({ base: "public/build" })], { to: "public/build/css/all.css" }))
		.pipe(concatCss("all.css"))
		.pipe(gulp.dest("public/build/css"));*/
	
});


