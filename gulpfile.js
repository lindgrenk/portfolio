var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
	return gulp.src('app/less/style.less')
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('app/css'))
});
