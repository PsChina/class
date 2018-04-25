var gulp = require('gulp') //需要引入一个 gulp 来提供一个 模拟后端服务器 的平台。
var webserver = require('gulp-webserver') //这个是搭建服务器的中间件。

var urlTool = require('url') //这个工具可以帮我们解析 url
var qs = require('qs') //这个工具用来将表单数据转换为对象

var fs = require('fs')
var dataBase = JSON.parse(fs.readFileSync('./dataBase.json').toString());

var md5 = require('./md5.js');
// var dataBase = {
//     home:'<div style="background:red">我是主页</div>',
//     homeData:{
//         innerText:'我是主页',
//         background:'red'
//     },
//     goodslist:[
//         {
//             name:'商品1',
//             price:.1
//         },
//         {
//             name:'商品2',
//             price:.2            
//         },
//         {
//             name:'商品3',
//             price:.3            
//         }
//     ],
//     users:[
//         {
//             account:'zhangsan',
//             password:'123456'
//         },
//         {
//             account:'lisi',
//             password:'654321'
//         },
//         {
//             account:'wangwu',
//             password:'abcd123'
//         }
//     ]
// }


function login(account,password){
    var exist = false;
    var success = false;
    var users = dataBase['users'];
    for(var i=0,length = users.length  ; i<length ; i++){

       if( users[i].account == account ){
            exist = true;
            if(users[i].password == password){
                success = true;
                break;
            }
       }
    }

    return exist ? {success:success} : exist;
}


function checkoutAccount(account){
    var exist = false;

    var users = dataBase['users'];

    for(var i = 0 , length = users.length ; i < length ; i++ ){
        if(users[i].account == account)  {
            exist = true;
        }
    }

    return exist;
}

gulp.task('mockServer',function(){ //定义一个服务任务 这个任务能启动一个后端服务器 并且提供接口给前端 当前端请求对应接口时候能的到对应的数据

    //为了能启动这个中间件 我们需要把它放在pipe里

    gulp.src('.')
        .pipe(webserver({
            port:3000, //这个是服务器的端口号
            middleware:function(request,response,next){ //这个函数能够拦截前端请求 并且处理请求 返回数据。
                
                //console.log(request.method,request.url) //可以拿到请求的方式 路径 参数
                var method = request.method, //获取 方式 => GET POST OPTIONS
                    url = request.url, //获取url全路径 包括 pathname 参数 等
                    urlObj = urlTool.parse(url), //把url 字符串转换成对象
                    pathname = urlObj.pathname, //拿到对象里面的pathname
                    getParams = urlObj.query,   //拿到对象里面的 字符串参数(get)
                    getParamsObj = qs.parse(getParams); //把字符串参数转成对象
                    // console.log(urlObj,getParamsObj)

                response.setHeader('Access-Control-Allow-Origin','*') //服务端允许跨域

                if(method === 'GET'){ //拦截get

                    switch(pathname){
                        case '/goodslist': //服务端返回数据
                        response.setHeader('content-type','application/json;charset=utf-8;')
                        response.write(JSON.stringify(dataBase['goodslist']))
                        response.end();
                        break;
                        case '/home': //服务端渲染
                        response.setHeader('content-type','text/html;charset=utf-8;')
                        response.write(dataBase['home'])
                        response.end();
                        break;
                        case '/homedata': //服务端返回数据
                        response.setHeader('content-type','application/json;charset=utf-8;')
                        response.write(JSON.stringify(dataBase['homeData']))
                        response.end();                        
                        break;
                        default:
                        response.setHeader('content-type','application/json;charset=utf-8;')
                        response.end(JSON.stringify({
                            msg:'没有这个url'
                        })); 
                        break;
                    }

                }else if(method === 'POST'){ //拦截post

                    var postData = ''; // 新建一个字符串变量来存储 post 请求发送过来的数据

                    request.on('data',function(chunk){ //通过监听 data 事件 来获取数据报
                        postData+=chunk //拼接数据
                    })




                    request.on('end',function(){ //通过监听 end 事件 得知数据接收完毕 可以分析post 路径了。

                        //console.log(postData)  //如果是用 jq 来发请求 都是表单数据 就算你传的是一个对象

                        var postDataObj = {} 
                        if(postData.indexOf('{')!==-1&&postData.indexOf('}')!==-1){
                            postDataObj = JSON.parse(postData)
                        } else {
                            postDataObj = qs.parse(postData)
                        }
                        

                        switch(pathname){
                            case '/login':
                            var exist = login(String(postDataObj.account),String(postDataObj.password))
                            response.setHeader('content-type','application/json;charset=utf-8')
                            if(exist){
                                if(exist.success){
                                    response.write('{"msg":"1"}')
                                }else{
                                    response.write('{"msg":"0"}')
                                }
                            }else{
                                response.write('{"msg":"-1"}')
                            }
                            response.end();
                            break;
                            case '/register':

                            //postDataObj //账号 密码

                            //这个账号能注册吗？ -> 遍历已有的数据 已经存在 就不能
                            
                            var exist = checkoutAccount(postDataObj.account) //返回一个布尔值

                            response.setHeader('content-type','appliction/json;charset=utf-8');

                            if(exist){
                                response.write('{"msg":"0"}')
                            }else{
                                var users = dataBase['users'];
                                users.push({
                                    account: postDataObj.account,
                                    password: md5(postDataObj.password)
                                })
                                fs.writeFileSync('./dataBase.json',JSON.stringify(dataBase));
                                response.write('{"msg":"1"}')
                            }
                            response.end();
                            //如果能 那就 把它存到用户 数据库里面 并且返回注册成功的消息给前端
                            //如果不能 那就要 返回一个用户已经存在的消息给前端
                            // end
                            break;
                            default:
                            response.end('没有这个url')
                            break;
                        }


                    })

                }else if(method === 'OPTIONS'){ //拦截options

                }

                //response.end()//结束响应 并且不返回任何数据

            },
            open:true //这个开关 设置是否自动打开浏览器
        }))

})


gulp.task('default',['mockServer'])