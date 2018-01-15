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
        ],
        'history|50-200':[
            { examName:'单页面开发','startTime|+86400000':time,'endTime|+86400':time+3600*1000, 'score|60-100':0,'id|+1':1 }
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
                        case '/history':
                        res.setHeader('content-type','application/json;charset=utf-8');
                        res.write(JSON.stringify(data.history));
                        res.end();                        
                        break;
                        case '/listlength':
                        res.setHeader('content-type','application/json;charset=utf-8');
                        console.log(data.history.length)
                        res.write(JSON.stringify({ length:data.history.length }));
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
                           case '/singlepagedata':
                                var dataNumberPerPage = postParams.number;
                                var currentPage = postParams.currentPage;
                                var array = data.history.slice((currentPage-1)*dataNumberPerPage,currentPage*dataNumberPerPage)
                                res.setHeader('content-type','application/json;charset=utf-8');
                                res.write(JSON.stringify(array));
                                res.end();
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

//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
//
//