var gulp = require('gulp')
var concat = require('gulp-concat')

gulp.task('concat',function(){
    gulp.src(['./a.txt','./b.txt'])
        .pipe(concat('c.txt'))
        .pipe(gulp.dest('./'))
})

gulp.task('default',['concat']);