var gulp = require('gulp');
var babel = require('gulp-babel');
var env = require('babel-preset-env');
var webpack = require('gulp-webpack');


gulp.task('default',function(){

    gulp.src('./es6.js')
        .pipe(babel({
            presets:[env]
        }))
        .pipe(gulp.dest('./js/'))
        .pipe(webpack({
            output:{
                filename:'boundle.js'
            },
            stats:{
                color:true
            }
        }))
        .pipe(gulp.dest('./js'));

})