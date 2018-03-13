var gulp = require('gulp') //我们需要获取gulp这个平台 来搭建服务器
var webserver = require('gulp-webserver') //这是个中间件 用来启服务的。

var urlTool = require('url')//专门将字符串url 转 对象的 可以互相转换
var qs = require('qs') //表单数据转对象 对象转表单数据


var dataBase = {
    goodslist:[
        {
            name:'商品1',
            parice:.1
        },{
            name:'商品2',
            parice:.2
        },{
            name:'商品3',
            parice:.3
        }
    ],
    users:[
        {
            id:01,
            account:'zhangsan',
            password:'123456'
        },{
            id:02,
            account:'lisi',
            password:'654321'
        },{
            id:03,
            account:'wangwu',
            password:'abc123'
        }
    ]
}


function login(account,password){
    var exist = false;
    var success = false;

    var users = dataBase['users']

    for ( var i = 0 , length = users.length ; i<length ; i++ ){
         if(users[i].account == account){
            exist = true;
            if(users[i].password == password){
                success = true;
                break;
            }
         }
    }

    return exist ? {success:success} : exist;
}

gulp.task('mockServer',function(){
    gulp.src('.') //因为 pipe 不在 gulp 下 所以我们需要src 一下
        .pipe(webserver({ //这个中间件需要在pipe 中执行
            port:3000, //服务器的端口号
            middleware:function(request,response,next){ //在这里拦截前端的请求 并且 分析 和 处理 之后返回对应的数据

                var method = request.method, // POST  GET  OPTIONS
                    url = request.url,  //  /house/home?user=a&id=001&age=18 这里面有 路径 和 参数 还有端口协议什么的
                    urlObj = urlTool.parse(url), //把 字符串url 转成对象
                    pathname = urlObj.pathname, //获取路径
                    getParams = urlObj.query, //获取类型为字符串的参数 而且是表单数据
                    getParamsObj = qs.parse(getParams) //获取对象形式的 get 参数

                    response.setHeader('Access-Control-Allow-Origin','*'); //服务端允许跨域

                if(method === "GET") {

                    switch(pathname){

                        case '/home': //返回一个静态页面  也就是服务端渲染的页面

                        response.setHeader('content-type','text/html;charset=utf-8')
                        response.write('<div style="background:green">主页</div>')
                        response.end();

                        break;
                        case '/goodslist': //服务端返回json 数据 由前端来渲染
                        response.setHeader('content-type','application/json;charset=utf-8')
                        response.write(JSON.stringify(dataBase['goodslist']))
                        response.end();
                        break;
                        default :
                        response.setHeader('content-type','text/html;charset=utf-8')
                        response.end('{"status":1}')
                        break;
                    }


                }else if(method === "POST") {

                    var postData = '';
                    
                    request.on('data',function(chunk){
                        postData += chunk; //有可能是表单  有可能是 json字符串
                    })

                    request.on('end',function(){ //这里标志 前端数据 接收完毕

                        var postDataObj = {}
                        if(postData.indexOf('{')!==-1&&postData.indexOf('}')!==-1){//json字符串

                            postDataObj = JSON.parse(postData);

                        }   else {
                            postDataObj = qs.parse(postData);
                        }
                        // postDataObj.account

                        // postDataObj.password

                        switch(pathname){
                            case '/login':
                            var exist = login(String(postDataObj.account),String(postDataObj.password))
                            response.setHeader('content-type','application/json;charset=utf-8');
                            if(exist){
                                //存在
                                if(exist.success){
                                    //登录成功
                                    response.write('{"msg":"1"}');
                                }else {
                                    //登录失败
                                    response.write('{"msg":"0"}');
                                }
                            }else {
                                //用户不存在 请注册
                                response.write('{"msg":"-1"}');
                            }
                            response.end();
                            break;
                            case '/register':
                            break;
                            default:
                            response.setHeader('content-type','text/html;charset=utf-8')
                            response.end('没有这个url')                        
                            break;
                        }

                    })


                }else if(method === "OPTIONS"){

                }



            },
            open:true//自动打开浏览器 但是这个是前端的
        }))
})