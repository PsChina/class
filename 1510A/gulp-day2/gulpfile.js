var gulp = require('gulp')
var concat = require('gulp-concat') //合并文件的 它就是一个函数
var cleanCss = require('gulp-clean-css')
var rename = require('gulp-rename')
var imageMin = require('gulp-imagemin')
var htmlMin = require('gulp-htmlmin')
var uglify = require('gulp-uglify')
var compileScss = require('gulp-sass') //它既能编译sass 又能编译scss
var compileLess = require('gulp-less') 
var connect = require('gulp-connect') //它能启动基于http的服务  它直接使用
var watch = require('gulp-watch') //它就是用来监听文件变化的  它也不是在 pipe 中使用的 也不是直接使用的 它是自动挂在在gulp下一个function
//首先我们要有至少2个文件
//什么文件是可以合并
//我先选取css来做实验
gulp.task('concatCss', function () {
    gulp.src(['style1.css', 'style2.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(cleanCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./css/'))
})

gulp.task('imageMin', function () {
    gulp.src('./*.png')
        .pipe(imageMin())
        .pipe(gulp.dest('./imagemin/'))
})

gulp.task('htmlMin', function () {

    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS        
    }

    gulp.src('./index.html')
        .pipe(htmlMin(options))
        .pipe(gulp.dest('./htmlmin/'))
})

gulp.task('uglify', function () {
    gulp.src('./js.js')
        .pipe(uglify())
        .pipe(rename('js.min.js'))
        .pipe(gulp.dest('./jsmin/'))
})

gulp.task('compileSass', function () {
    gulp.src('./*.sass')
        .pipe(compileScss())
        .pipe(rename('sass.css'))
        .pipe(gulp.dest('./css/'))
})

gulp.task('compileScss', function () {
    gulp.src('./*.scss')
        .pipe(compileScss())
        .pipe(rename('scss.css'))
        .pipe(gulp.dest('./css/'))
})

gulp.task('compileLess',function(){
    gulp.src('./*.less')
        .pipe(compileLess())
        .pipe(rename('less.css'))
        .pipe(gulp.dest('./css/'))
})

gulp.task('httpServer',function(){
    connect.server({
        port:8080,
        livereload:true  //自动刷新浏览器的 必要条件
    })
})

gulp.task('refreshBrowser',function(){
    gulp.src('.')
        .pipe(connect.reload()); ///自动刷新浏览器的 必要条件
})

gulp.task('watch',function(){
    gulp.watch('./index.html',['refreshBrowser'])
})

gulp.task('startServerAndRefresh',['httpServer','watch'])

gulp.task('default', ['concatCss', 'imageMin', 'htmlMin', 'uglify'])