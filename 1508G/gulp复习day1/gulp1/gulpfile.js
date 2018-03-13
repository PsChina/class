var gulp  = require('gulp')
//var concat = require('gulp-concat')//合并文件
var reanme = require('gulp-rename')
var cssmin = require('gulp-clean-css') //清洁css  压缩css
var imagemin = require('gulp-imagemin')
var uglify = require('gulp-uglify')
var htmlmin = require('gulp-htmlmin')

gulp.task('copyfile',function(){
    gulp.src('*.txt')
        .pipe(reanme('aaa.txt'))
        .pipe(gulp.dest('./txtfile/'))
})

gulp.task('imageMin',function(){
    gulp.src(['*.png','*.jpg','*.gif'])
        .pipe(imagemin)
        .pipe(gulp.dest('./imagemin/'))
})

gulp.task('uglify',function(){
    gulp.src('*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./jsmin/'))
})

gulp.task('htmlmin',function(){
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    }
    gulp.src(['*.html','./*/*.html','./*/*/*.html'])
        .pipe(htmlmin(options))
        .pipe(gulp.dest('./htmlmin/'))
})