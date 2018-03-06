
var gulp = require('gulp');

var webserver = require('gulp-webserver');

var url = require('url')

var qs = require('qs')

var fs = require('fs')

if( fs.existsSync('./userList.json') ){
    var buffer = fs.readFileSync('./userList.json')
    var userArr = JSON.parse( buffer.toString());
}else {
    var userArr = [];
    fs.writeFileSync('./userList.json',JSON.stringify(userArr))
}


function login( userName, password ){ // 接收参数
    var exsit = false; // 默认用户不存在
    var success = false; // 默认登录没成功
    userArr.forEach(function(value,index,arr){ // 查询所有用户
        if( value.userName === userName ){ // 找到要登录的用户
            exsit = true; // 用户存在
            if( value.password == password ){ // 验证密码
                success = true; // 登录成功
            }
           return {success:success} // 返回对应信息
        }

    });
    return exsit?{success:success}:exsit;
    
}


gulp.task('mockServer',function(){
    gulp.src('.')
        .pipe( webserver({
            port:3001,
            middleware:function(req,res,next){
                var method = req.method, // 请求方式
                    urlObj = url.parse(req.url), // url对象
                    pathname = urlObj.pathname, // 路径名
                    getParams = qs.parse(urlObj.query)  // get参数 id=001&user=zhangsan
                
                // 服务端解决跨域问题
                res.setHeader('Access-Control-Allow-Origin','*') // *号匹配所有 通配符
                if( method === 'GET' ) {

                }else if(method === 'POST'){
                    var str = ''
                    req.on('data',function(chunk){
                        str += chunk; // 获取post 数据
                    })

                    req.on('end',function(){
                        /*
                        '{id:001,user:zhangsan}' == {id:001,user:zhangsan}
                        'id=001&user=zhangsan' == {id:001,user:zhangsan}
                        */
                           // string  = > object
                        var postParams = {}; // post 参数
                        if( str.indexOf('{')!==-1 && str.indexOf('}')!==-1 && str.indexOf(':')!==-1){

                            postParams = JSON.parse(str);

                        } else {

                            postParams = qs.parse(str);

                        }

                        switch(pathname){
                            case '/login':
                            console.log('登录')
                            var exsit = login( postParams.userName , String(postParams.password) );
                            console.log( exsit )
                            if(exsit){
                                if(exsit.success){
                                    res.write('{"state":1}');
                                }else{
                                    res.write('{"state":0}');
                                }
                            }else{
                                res.write('{"state":-1}');
                            }
                            
                            res.end();
                            break;
                            case '/register':
                            console.log('注册')
                            
// 0 代表注册失败            
// 1 代表注册成功
// 2 代表用户已经存在
                            var exsit = false;
                            for ( var i=0 , length = userArr.length; i<length ; i++ ){
                                if(userArr[i].userName === postParams.userName) {
                                    exsit = true;
                                    break;
                                }
                                
                            } 
                            if( exsit ){
                                res.end('{"state":2}')
                            }else {
                                userArr.push({userName:postParams.userName,password:postParams.password,userID:userArr.length+1});
                                var fail = fs.writeFileSync('./userList.json',JSON.stringify(userArr));
                                if(fail){
                                    res.end('{"state":0}')
                                }else{
                                    res.end('{"state":1}')
                                }
                                
                            }
                            break;
                            default :
                            break;
                        }


                    })

                } 
            }
        }) )
})