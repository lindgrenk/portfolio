var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var browserSync = require('browser-sync').create();

gulp.task('less', function () {
	return gulp.src('src/less/style.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers : ['last 2 versions'],
			cascade  : false
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
});

gulp.task('serve', ['less'], function() {
    browserSync.init({
        server: "./",
        open: false
    });

    gulp.watch("src/less/*.less", ['less']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
