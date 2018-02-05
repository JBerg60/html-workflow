/*
 *	Simple gulp file for automated workflow
*/
var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var watch      = require('gulp-watch');
var connect    = require('gulp-connect');

var paths = {
	sass:       ['./scss/**/*.scss'],
	templates:  ['./**/*.html']
  };
  
  gulp.task('css', function () {
	gulp.watch(paths.sass, ['sass']);
  });

  gulp.task('watch', function () {
	gulp.watch(paths.sass, ['sass']);
  });
  
  gulp.task('serve', function() {
	connect.server({
	  livereload: true,
	  port: 1337,
	  host: "localhost",
	  root: 'dest'
	});
  });

  gulp.task('serve', ['css'], function() {
    
    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/main.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
