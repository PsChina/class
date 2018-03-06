var gulp = require('gulp');

var webserver = require('gulp-webserver');

var url = require('url');

var qs = require('qs');

gulp.task('mockServer',function(){ // 模拟后端服务器
// http://localhost:3000/examlist?id=001
    gulp.src('.')
        .pipe( webserver({
            port:3000,
            middleware:function(req,res,next){[[]]

                var method = req.method, // GET
                    urlObj = url.parse(req.url), // {  }
                    pathname = urlObj.pathname, // /examlist
                    getParams = qs.parse( urlObj.query) // id=001


                // console.log(method, urlObj , pathname, getParams ) 

                if( method === 'GET' ){
                    switch (pathname) {
                        case '/list':
                        res.setHeader('content-type','application/json;charset=utf-8');
                        res.write( JSON.stringify( [ {name:'商品1',price:10}, {name:'商品2',price:20}, {name:'商品3',price:05} ] ) )
                        res.end();
                            break;
                        case '/index':
                        res.setHeader('content-type','text/html;charset=utf-8');
                        res.write('<html><head></head><body><div style="background:red">主页</div></body></html>');
                        res.end();
                            break;
                        default:
                            res.setHeader('content-type','text/html;charset=utf-8');
                            res.end('没有这个接口')
                            break;
                    }
                }

                // res.end();
            }
        }) )

})