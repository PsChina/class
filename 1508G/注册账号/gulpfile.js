var gulp = require('gulp')
var webserver = require('gulp-webserver');

var urlTool = require('url')
var qs = require('qs')

var users = [{
    account:'zhangsan',
    password:'123456'
},{
    account:'lisi',
    password:'654321'
},{
    account:'wangwu',
    password:'123abc'
}]


function isExist(account){
    var exist;
    for(var i= 0 ,length = users.length; i<length ; i++) {
        users[i].account == account ? exist = true : exist = false ;
    }
    return exist;
}

function register(account,password){
    users.push(
        {
            account:String(account),
            password:String(password)
        }        
    )
}

gulp.task('mockServer', function () {
    gulp.src('.')
        .pipe(webserver({
            port: 3000,
            middleware: function (req, res, next) { //拦截前端的请求

                var method = req.method //GET POST OPTIONS
                var url = req.url; //url字符串
                var urlObj = urlTool.parse(url);
                var pathname = urlObj.pathname;

                res.setHeader('Access-Control-Allow-Origin','*');

                if (method === 'POST') {
                    var postData = '';
                    req.on('data',function(chunk){
                        postData +=chunk;
                    })
                    var postDataObj = {}

                    req.on('end',function(){
                        
                        if(postData.indexOf('{')!==-1&&postData.indexOf('}')!==-1){
                            postDataObj = JSON.parse(postData);
                        } else {
                            postDataObj = qs.parse(postData);
                        }

                        console.log(postDataObj)
                        switch (pathname) {
                            case '/register':
                            var exist = isExist(postDataObj.account);
                            res.setHeader('content-type','application/json;charset=utf-8');
                            if(exist){
                                res.write('{"msg":"0"}')
                            }else {
                                register(postDataObj.account,postDataObj.password);
                                res.write('{"msg":"1"}')
                            }
                            console.log(users)
                                res.end()
                                break;
                            default:
                                res.end('只提供注册接口')
                                break;
                        }

                    })


                }

            }
        }))
})

gulp.task('default', ['mockServer'])