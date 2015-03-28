var gulp = require('gulp');
var config = require('./config.js');

gulp.task('watch', function() {
	gulp.watch(config.js, ['browserify']);
	gulp.watch(config.less.src, ['less']);
});