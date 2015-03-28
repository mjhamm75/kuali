var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch(config.js.src, ['browserify']);
	gulp.watch(config.less.src, ['less']);
});