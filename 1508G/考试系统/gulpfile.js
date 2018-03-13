var gulp = require('gulp');
var browserify = require('browserify'); //基于node 
var source = require('vinyl-source-stream'); //是用来打包用的 你可以理解为取名字的
var buffer = require('vinyl-buffer')
var rev = require('gulp-rev') //生成md5后缀
var collector = require('gulp-rev-collector')//自动替换路径的
var connect = require('gulp-connect')
var watch = require('gulp-watch')
gulp.task('module',function(callback){
    browserify({
        entries:['./js/common/entry.js']
    }).bundle()
      .pipe(source('bundle.js')) //此时它还是基于node  所以 gulp 无法识别
      .pipe(buffer())//需要将它转换成 gulp的流
      .pipe(rev())
      .pipe(gulp.dest('./dist/'))
      .pipe(rev.manifest())
      .pipe(gulp.dest('./'))
      .on('end',function(){
            callback()
      })
      
})

gulp.task('replaceSrc',['module'],function(callback){
    gulp.src(['./index.html','./rev-manifest.json'])
        .pipe(collector({
            replaceReved:true
        }))
        .pipe(gulp.dest('./'))
        .on('end',function(){
            callback()
        })
})

gulp.task('httpServer',function(){
    connect.server({
        port:8080,
        livereload:true
    })
})

gulp.task('refreshBrowser',['replaceSrc'],function(){
    gulp.src('.')
        .pipe(connect.reload())
})

gulp.task('watch',function(){
    gulp.watch(['./js/*/*.js','./js/*/*/*.js','./component/template/*.html'],['module','refreshBrowser'])
    gulp.watch(['./*.html','./css/*.css'],['refreshBrowser'])
})

gulp.task('default',['httpServer','module','replaceSrc','watch'])
