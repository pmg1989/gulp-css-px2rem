var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');

gulp.task('css', function () {

    var processors = [
        pxtorem({
            rootValue: 50,
            propWhiteList: [],
          })
    ];

    return gulp.src(['src/antd-mobile.min.css', 'src/nprogress.css'])
        .pipe(postcss(processors))
        .pipe(gulp.dest('build/css'));
});