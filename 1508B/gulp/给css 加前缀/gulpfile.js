var gulp = require('gulp');

gulp.task('autoprefixer', function () {
  var postcss      = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');

  gulp.src('./*.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest('./dist/postcss'));
});

gulp.task('default',['autoprefixer'])

//webView