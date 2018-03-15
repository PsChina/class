var gulp = require('gulp')
var browserify = require('browserify')  //获取入口文件的 包
var source = require('vinyl-source-stream') //合并js
var buffer = require('vinyl-buffer') //转流  把基于node的流转为基于gulp的流
var rev = require('gulp-rev') //生成md5 身份标识
var collector = require('gulp-rev-collector') //自动替换
var watch = require('gulp-watch') //监听文件变化
var connect = require('gulp-connect') //启动前端服务

gulp.task('module',(callback)=>{
    browserify({
        entries:['./js/app/entry.js']
    }).bundle()
      .pipe(source('bundle.js')) 
      .pipe(buffer()) //转流
      .pipe(rev()) // 生成md5后缀
      .pipe(gulp.dest('./bundle/'))
      .pipe(rev.manifest())
      .pipe(gulp.dest('./bundle/'))
      .on('end',()=>{
        callback();
      })

})
gulp.task('replace',['module'],()=>{

    // setTimeout(function() {
        gulp.src(['./index.html','./bundle/rev-manifest.json'])
        .pipe(collector({
            replaceReved:true
        }))
        .pipe(gulp.dest('./')) 
        .pipe(connect.reload());       

    // }, 1000);

})

gulp.task('httpServer',()=>{
    connect.server({
        port:8080,
        livereload:true
    })
})
gulp.task('reloadServer',()=>{
    gulp.src('.')
        .pipe(connect.reload());
    
})

gulp.task('watch',()=>{

    gulp.watch(['./js/app/*.js','./js/app/*/*.js'],['module','replace']);
    gulp.watch(['./index.html'],['reloadServer']);
    gulp.watch(['./template/*.html','./template/*/*.html'],['reloadServer'])
    gulp.watch(['./css/*.css'],['reloadServer'])

})

gulp.task('default',['httpServer','module','replace','watch'])

