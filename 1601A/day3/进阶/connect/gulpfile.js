var gulp = require('gulp');

var connect = require('gulp-connect');

gulp.task('httpServer',function(){
    // 特殊的 包 不需要在 pipe 里面用
    connect.server({
        prot:8080,
        livereload:true //热替换  自动刷新浏览器的开关
    })
})

gulp.task('reloadBrowser',function(){
    console.log('did run')
    gulp.src('.')
        .pipe( connect.reload() );
})

gulp.task('watch',function(){
    gulp.watch('./index.html',['reloadBrowser'])
})

gulp.task('default',['httpServer','watch'])  // 就是说当我执行 default 任务时 会运行  'httpServer' 'watch'

// 可以 直接 gulp 一下 不需要  gulp default