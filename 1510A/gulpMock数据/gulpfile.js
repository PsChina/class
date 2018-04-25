var gulp = require('gulp')
var webserver = require('gulp-webserver')
var qs = require('qs')

var urlTool = require('url')
gulp.task('mockServer',function(){
    gulp.src('.')
        .pipe(webserver({
            port:3000,
            middleware:function(request,response,next){
                var method = request.method             //获取请求方式 POST GET OPTIONS
                // 表单数据 key1=value1&key2=value2&key3=value3 以此类推 、对象{}
                // 在POST的请求的 data 为对象时会触发
                // OPTIONS 是一个试探的请求 用于试探服务器是否允许跨域 是否允许 POST GET PULL DELETE
                // 如果服务器不允许接下来的操作那么我就没有必要发送这个请求了。

                //需要 前端传过来参数 还有路径
                //如果是get 的参数
                var urlStr = request.url; //  http://baidu/home?userName=zhangsan
                var urlObj = urlTool.parse(urlStr);

                var getParams = urlObj.query; //'userName=zhangsan'=> {userName:"zhangsan"}

                var pathname = urlObj.pathname; // /home   /goodslist  /commoditydetails /shoppingcart /login /register

                if(method === "GET"){
                    switch(pathname){
                        case '/home':
                        break;
                        case '/goodslist':
                        break;
                        case '/commoditydetails':
                        break;
                    }
                }else if(method === "POST"){ //post 的请求的 数据放在请求体里面 需要用 request.on('data') 来接收
                    var dataStr = '';
                    var postParmas = {};
                    request.on('data',function(chunk){
                        dataStr +=chunk;
                    })
                    request.on('end',function(){
                        //有可能有2种类型  1、'{}'    2、userName=zhangsan  => {}
                        if(dataStr.indexOf('{')!==-1&&dataStr.indexOf('}')!==-1){ //对象字符串
                            postParmas = JSON.parse(dataStr); 
                        }else {//表单字符串
                            postParmas = qs.parse(dataStr);
                        }

                        // postParmas 可能存的 就是账号密码了
                    })
                    
                }else if(method === 'OPTIONS'){

                }

            },
            open:true
        }))
})


gulp.task('default',['mockServer'])