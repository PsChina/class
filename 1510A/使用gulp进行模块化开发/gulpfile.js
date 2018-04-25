//用gulp 做模块化 有2中选择 1用基于gulp的包 2用基于node 的包 我们用2
//因为 1这个东西有缺陷
//所以要转流 要把基于node 的流 转成基于gulp 的流
var gulp = require('gulp');
var browserify = require('browserify'); //node 包
var source = require('vinyl-source-stream'); //合并js 的 
var buffer = require('vinyl-buffer'); // 把node 的流转为 gulp的流的
var rev = require('gulp-rev'); //这个东西是用来计算md5后缀的
var collector = require('gulp-rev-collector') //根据对应关系替换js src 的包
var connect = require('gulp-connect') //启动服务
var watch = require('gulp-watch') //监听文件变化

gulp.task('module', function (callback) {
    browserify({
        entries:['./entry.js'] //把入口文件从磁盘读取到内存
    }).bundle() //把入口文件内的 require 运行一下 引入对应的js 文件 也就是打包成一个
      .pipe(source('bundle.js')) //取名字 此时还是基于node 的
      .pipe(buffer()) //把基于node 的流转成 gulp 能识别的流
      .pipe(rev())//加md5后缀
      .pipe(gulp.dest('./')) //输出bundle-rgdgdfgdfhdf.js
      .pipe(rev.manifest()) // 把bundle.js 和 bundle-rgdgdfgdfhdf.js 的对应关系存起来 存在rev-manifest.json里
      .pipe(gulp.dest('./'))//输出rev-manifest.json
      .on('end',function(){
            callback();
      })

})

gulp.task('replaceSrc',['module'],function(){
    gulp.src(['./index.html','./rev-manifest.json'])
        .pipe(collector({
            replaceReved:true
        }))
        .pipe(gulp.dest('./'))
})

gulp.task('httpServer',function(){
    connect.server({
        port:8080,
        livereload:true
    })
})

gulp.task('refreshBrowser',function(){
    gulp.src('.')
        .pipe(connect.reload())
})

gulp.task('watch',function(){
    gulp.watch('./index.html',['refreshBrowser'])
    gulp.watch(['./*.js'],['module','replaceSrc','refreshBrowser'])
})


gulp.task('default',['httpServer','module','replaceSrc','watch']) //异步的 