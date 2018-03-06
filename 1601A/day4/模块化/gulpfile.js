var gulp = require('gulp')
var browserify = require('browserify')  // 基于node 的包 并不是 基于 gulp 的

var connect = require('gulp-connect')

// 那为什么 可以在gulp 里面用呢 因为 gulp 本身是基于node 的 

// 所以 只需要将 node 的流转换为 基于gulp 的流 就好了  怎么转换呢  引入 source (vinyl-scourc-stream) 和 buffer (vinyl-buffer)

var source = require('vinyl-source-stream');

var buffer = require('vinyl-buffer');

var rev = require('gulp-rev');

var collector = require('gulp-rev-collector'); 

gulp.task('module',function(callBack){  // 打包js  把多个js 打包成一个js
    browserify({
        entries:['./entry.js']  // 获取文件
    }).bundle()
    .pipe( source('bundle.js') ) // 合并文件
    .pipe( buffer() ) // 转流
    .pipe( rev() ) // 加 md5 后缀  （摘要算法） // bundle => bundle-1e74b0fad2  {bundle:'bundle-1e74b0fad2'}
    .pipe( gulp.dest('./dist') )
    .pipe( rev.manifest() )  // 生成对应关系
    .pipe( gulp.dest('./') )
    .on('end',callBack); //  通过回调函数 解决异步问题
})

gulp.task('replaceSrc',['module'],function(){  // 替换路径的前提是 对应关系生成完毕
    
        gulp.src([ './index.html' , './*.json' ])
        .pipe( collector({
            replaceReved:true // 替换路劲的开关
        }) )
        .pipe( gulp.dest('./') )

})

gulp.task('httpServer',function(){
    connect.server({
        port:8080,
        livereload:true
    })
})

gulp.task('reloadBrowser',function(){
    gulp.src('.') // 拿到所有的资源
        .pipe( connect.reload() ) // 刷新浏览器
})

gulp.task('watch',function(){  
    gulp.watch( ['./module1.js','./module2.js'] , ['module','replaceSrc'] ) // 刷新浏览器
    gulp.watch( ['./index.html'],['reloadBrowser'] ) // watch index
})

gulp.task('default',['httpServer','module','watch'])