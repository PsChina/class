
var gulp = require('gulp')

var sequence = require('gulp-sequence')

gulp.task('copyfile1',function(){
    gulp.src('./file/file1.txt')
        .pip
})

gulp.task('copyfile2',function(){
    return 
})


gulp.task('default',function(){
    return sequence('copyfile1', 'copyfile2',function(){
        console.log('done')
    })
});

// 因为是异步的 所以 一起 

// 但是我们想 转成 同步的