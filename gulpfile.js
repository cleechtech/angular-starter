var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('webserver', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
});
 
gulp.task('default', ['webserver']);