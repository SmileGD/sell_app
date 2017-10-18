var gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-csso'),
	uglify  = require('gulp-uglify'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber');

gulp.task('less',function(){
	return gulp.src('./less/*.less')
	.pipe(plumber())
	.pipe(less())
	.pipe(minifyCSS())
	.pipe(concat('style.css'))
	.pipe(gulp.dest('./css'))
})

gulp.task('js',function(){
	return gulp.src('./javascript/*.js')

	.pipe(uglify())
	.pipe(gulp.dest('./js'))
})

gulp.task('watch',function(){
	gulp.watch('./less/*.less',['less']);
	gulp.watch('./javascript/*.js',['js']);
})
