/*
 *	Simple gulp file for automated workflow
*/
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
	//gulp.watch(paths.sass, ['sass']);
});

gulp.task('serve', ['css'], function() {
    
    browserSync.init({
        server: "./dist/"
    });

    //gulp.watch("./sass/main.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
