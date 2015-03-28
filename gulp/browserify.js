var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var to5 = require('6to5ify');
var config = require('./config.js');

gulp.task('browserify', function() {
	browserify(config.app.entry, {debug: true})
			.transform(to5)
		    .transform(reactify)
		    .bundle()
		    .pipe(source(config.app.bundleName))
		    .pipe(gulp.dest(config.app.bundle));
});