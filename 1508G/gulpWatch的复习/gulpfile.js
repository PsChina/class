var gulp = require('gulp')
var connect = require('gulp-connect')
var watch = require('gulp-watch')

gulp.task('httpServer',function(){
    connect.server({
        port:8080,
        livereload:true
    })
})

gulp.task('reloadServer',function(){
    gulp.src('.')
        .pipe(connect.reload());
})

gulp.task('watch',function(){
    gulp.watch('./index.html',['reloadServer'])   
})

gulp.task('default',['httpServer','watch'])