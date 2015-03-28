var gulp = require('gulp');
var less = require('gulp-less');
var config = require('./config.js');

gulp.task('less', function() {
	gulp.src(config.less.src)
		.pipe(less())
		.pipe(gulp.dest(config.less.dest));
});