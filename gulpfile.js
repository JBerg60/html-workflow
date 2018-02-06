/*
 *	Simple gulp file for automated workflow
*/
var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('server', function () {
	connect.server({
		root: 'dist',
		port: 3000,
		livereload: true
	});
});

gulp.task('html', function () {
	gulp.src('./src/**/*.html')
		.pipe(gulp.dest('./dist'))
		.pipe(connect.reload());
});

gulp.task('css', function () {
	gulp.src('./src/css/**/*.css')
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['./src/**/*.html'], ['html']);
	gulp.watch(['./src/css/**/*.css'], ['css']);
});

gulp.task('clean', function () {
	return del(['dist/**', '!dist'], { force: true });
});

gulp.task('build', ['html', 'css'], function () {
	gulp.src('./src/**/*.ico').pipe(gulp.dest('./dist'));
	gulp.src('./src/**/*.jpg').pipe(gulp.dest('./dist'));
	gulp.src('./src/**/*.png').pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean', 'build', 'server', 'watch']);
