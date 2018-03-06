var gulp = require('gulp'); // 下载到本地

var concat = require('gulp-concat'); // 合并的包
 
var minCss = require('gulp-clean-css') // 压缩css

var rename = require('gulp-rename') // 重命名

var minImage = require('gulp-imagemin') // 压缩图片

var uglifyJS = require('gulp-uglify')

// var compileLess = require('gulp-less') // 

var compileScss = require('gulp-sass') // sass 虽然它的名字是sass 但是 它技能编译scss  也能 编译sass  除了less

//1、 task 定义任务
// gulp.task('sayHello',function(){
//     console.log('hello');
// })

//2、 src 获取资源
gulp.task('copy',function(){  // 把一个txt 拷贝到 /dist文件夹下
    gulp.src('./测试.txt')
        .pipe( gulp.dest('./dist/') )  
})

//3、pipe 是一个管道流  上一级的输出是这一级的 输入 它接收一个函数的调用

//4、dest 是输出目录  输出到...


// 合并文件

gulp.task('concatCss',function(){
    gulp.src(['./style1.css','style2.css'])  // 拿到2个文件
        .pipe( concat('style.css') ) // 合并
        .pipe( gulp.dest('./css') ); // 输出
})


// 压缩css

gulp.task('minCss',function(){ // 这个就像流水线
    gulp.src('./css/style.css') // 拿到你的生产资料
        .pipe( minCss() ) // 帮你压缩css
        .pipe( rename('style.min.css') ) // 重命名你的css 
        .pipe( gulp.dest('./minCss/') ) // 输出到目标文件夹下
})

// 5道工序



// 压缩图片

gulp.task('minImage',function(){
    gulp.src('./logo_01.png')
        .pipe( minImage() ) // 压缩图片
        .pipe( rename('logo.min.png') )
        .pipe( gulp.dest('./minImage/') )
})


gulp.task('uglifyJS',function(){
    gulp.src('./*.js')
        .pipe(uglifyJS())
        .pipe(rename('XX.min.js'))
        .pipe( gulp.dest('./minjs/') )
})


gulp.task('compileScss',function(){
    gulp.src('./*.scss')
        .pipe( compileScss() ) // 换一个 less  就能编译less 了
        .pipe( minCss() )
        .pipe( rename('styleByScss.min.css') )
        .pipe( gulp.dest('./css/') )
})


