// postcss 是给 css 加前缀的
// css 前缀 的出现是因为 各大浏览器对一些属性的 实现不一致所导致的。 比如 --webkit -o -ms 这些东西 我们不像自己去加 
var gulp = require('gulp')


gulp.task('autoprefixer',function(){
    var postcss = require('gulp-postcss')
    var autoprefixer = require('autoprefixer')

    gulp.src('./*.css')
        .pipe(postcss([autoprefixer({browsers:['last 2 versions']})]))
        .pipe(gulp.dest('./css/'))
})

gulp.task('default',['autoprefixer'])