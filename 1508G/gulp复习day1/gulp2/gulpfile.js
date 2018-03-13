var gulp = require('gulp')
var compileSass = require('gulp-sass')
var compileLess = require('gulp-less')
var connect = require('gulp-connect')
gulp.task('compileSass',function(){
    gulp.src('./*.sass')
        .pipe(compileSass())
        .pipe(gulp.dest('./sassToCss'))    
})

gulp.task('compileScss',function(){
    gulp.src('./*.scss')
        .pipe(compileSass())
        .pipe(gulp.dest('./scssToCss'))
})

gulp.task('compileLess',function(){
    gulp.src('./*.less')
        .pipe(compileLess())
        .pipe(gulp.dest('./lessToCss/'))
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
    gulp.watch('./*.html',['refreshBrowser'])
})
//'compileSass','compileScss','compileLess'
gulp.task('default',['httpServer','watch'])