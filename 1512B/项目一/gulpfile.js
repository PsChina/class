var gulp = require('gulp');
var webserver = require('gulp-webserver');
var connect = require('gulp-connect');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var Mock = require('mockjs');


var time = new Date().getTime();

function mockData(){
    var data = Mock.mock({
        'list|20':[
            { examName:'单页面开发','startTime|+86400000':time,'endTime|+86400':time+3600*1000, 'isOpen|1-1':true,'id|+1':1 }
        ]
    })
    fs.writeFileSync('./json.json',JSON.stringify(data));
    return data;
}

if( fs.existsSync('./json.json') ){

    var dataBuffer = fs.readFileSync('./json.json')

    var data = JSON.parse(dataBuffer.toString())
    
    if(data.list.length === 0){
        data = mockData();
    }

}else{
    var data = mockData();
}



gulp.task('mockServer',function(){
    gulp.src('.')
        .pipe(webserver({
            port:3000,
            middleware:function(req,res,next){
                var method = req.method,
                    urlObj = url.parse(req.url),
                    pathname = urlObj.pathname,
                    getParams = qs.parse(urlObj.query)
                res.setHeader('Access-Control-Allow-Origin','*'); //跨域的一种解决方式
                if( method === 'GET' ){

                    switch(pathname){
                        case '/startexam':
                            res.setHeader('content-type','application/json;charset=utf-8');
                            res.write(JSON.stringify(data.list));
                            res.end();
                        break;
                        default:
                            res.end('暂未提供该接口')
                        break;
                    }

                }else if( method === 'POST' ){

                    var str = '';
                    req.on('data',function(chunk){
                        str += chunk;
                    })

                    req.on('end',function(){
                       var postParams = qs.parse(str);
                       switch(pathname){
                           case '/deleteexam':

                           if( postParams.userId ){

                            data.list.forEach(function(value,index,arr){
                                
                                if( postParams.id==value.id ){
                                    arr.splice(index,1);
                                }
                            })

                                var error = fs.writeFileSync('./json.json',JSON.stringify(data));
                                if(error){
                                    res.end(JSON.stringify({state:-1,value:error}))
                                }else{
                                    res.end(JSON.stringify({state:1,value:'success'}))
                                }
                
                           }else{
                               res.end('没有userId')
                           }

                           break;
                           default:
                           res.end('暂未提供该接口')
                           break;
                       }
                    })

                }else if( method === 'OPTIONS' ){
                    res.writeHead(200,{'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    })
                    res.end();
                }
            }
        }))
})

gulp.task('httpServer',function(){
    connect.server({
        port:8080,
        livereload:true
    })
})

gulp.task('reload',function(){
    gulp.src('.')
        .pipe( connect.reload() );
})

gulp.task('watch',function(){
    gulp.watch(['./src/js/*.js','./src/js/*/*.js','./src/css/*.css','./index.html','./src/template/*.html','./src/template/*/*.html'],['reload'])
})


gulp.task('default',['mockServer','httpServer','watch'])