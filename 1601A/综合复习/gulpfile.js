var gulp = require('gulp');

var webserver = require('gulp-webserver'); // 后端服务器

var connect = require('gulp-connect'); // 前端服务器

var url = require('url');

var qs = require('querystring');

gulp.task('mockServer',function(){
    gulp.src('.')
        .pipe( webserver({
            port:3000,
            middleware:function(req,res,next){
                var method = req.method, // 请求方式
                    urlObj = url.parse( req.url ), // url 对象
                    pathname = urlObj.pathname, // 路径 
                    getParams = qs.parse(urlObj.query); // get请求 参数
                
                // 服务端允许跨域
                res.setHeader('Access-Control-Allow-Origin','*') // 允许任何域名访问

                if( method === 'GET' ) {

                    switch(pathname){
                        case '/page1':
                            var data = {value:'页面一'};
                            res.end( JSON.stringify(data) );
                        break;
                        case '/page2':
                            var data = {value:'页面二'};
                            res.end( JSON.stringify(data) );
                        break;
                        default :
                            res.end('没有这个接口')
                        break;
                    }

                }else if( method === 'POST' ){

                }else if( method === 'OPTIONS' ){
                    
                    res.writeHead(200,{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    });
                    res.end();
                    
                }
            }
        }) )
})

gulp.task('httpServer',function(){

    connect.server({
        port:8080,
        livereload:true
    })

})

gulp.task('default',['httpServer','mockServer']);