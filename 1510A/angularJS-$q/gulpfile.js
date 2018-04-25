var gulp = require('gulp')
var webserver = require('gulp-webserver')


gulp.task('mockserver',function(){
    gulp.src('.')
        .pipe(webserver({
            port:3000,
            middleware:function(req,res,next){

                res.setHeader('Access-Control-Allow-Origin','*');

                var obj = {
                    a:'数据A',
                    b:'数据B'
                }

                res.write(JSON.stringify(obj));
                
                res.end();

            }
        }))
})

gulp.task('default',['mockserver'])