module.exports = {
	app: {
		entry: './js/router.js',
		bundle: './build',
		bundleName: 'bundle.js'
	},
	less: {
		src: './less/app.less',
		dest: './build'
	},
	js: ['./js/**/*.js']
}