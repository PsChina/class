var gulp = require('gulp');
var connect = require('gulp-connect');
var webserver = require('gulp-webserver');

var url = require('url');
var qs = require('querystring');

gulp.task('httpServer',function(){
    connect.server({
        port:'8080',
        livereload:true
    })
})

 //拿到获取文件的工具

//获取文件   我想如果你想直接返回这个文件给前端的话那就不需要转成base64了

function loadImage(path){
    var fs = require('fs')
    var imgdata = fs.readFileSync(__dirname+path);
    var imgbuffer = new Buffer(imgdata) //转成buffer
    var imgBase64 = 'data:image/png;base64,'+ imgbuffer.toString('base64') //转成 base64的图片 以便直接放在<img src=''/> 的src里面
    return imgBase64;
}

gulp.task('mockServer',function(){
    gulp.src('.')
        .pipe( webserver({
            port:3000,
            middleware:function(req,res,next){
                res.setHeader('Access-Control-Allow-Origin','*') //'http://localost:8080' 允许http://localost:8080 访问
                var method = req.method,
                    urlObj =  url.parse(req.url),
                    pathname = urlObj.pathname,
                    getParams =  qs.parse(urlObj.query);
                
                if( method === 'GET' ){

                    var songList = [{
                        songName:'你不知道的事',
                        singer:'王力宏',
                        src:'http://localhost:8080/src/music/王力宏 - 你不知道的事.mp3',
                        songIcon:'http://localhost:8080/src/img/icon_01.png'
                    },
                    {
                        songName:'爱我别走',
                        singer:'周杰伦',
                        src:'http://localhost:8080/src/music/周杰伦 - 爱我别走.m4a',
                        songIcon:'http://localhost:8080/src/img/icon_02.png'
                    },
                    {
                        songName:'告白气球',
                        singer:'周杰伦',
                        src:'http://localhost:8080/src/music/周杰伦 - 告白气球.m4a',
                        songIcon:'http://localhost:8080/src/img/icon_03.png'
                    },
                    {
                        songName:'听妈妈的话',
                        singer:'周杰伦',
                        src:'http://localhost:8080/src/music/周杰伦 - 听妈妈的话.m4a',
                        songIcon:'http://localhost:8080/src/img/icon_04.png'
                    }]

                   var bannerList = [
                       { src:loadImage('/src/img/banner1.jpg') },
                       { src:loadImage('/src/img/banner2.jpg') },
                       { src:loadImage('/src/img/banner3.jpg') },
                       { src:loadImage('/src/img/banner4.jpg') }
                   ] 
                    switch(pathname){
                        case '/songList':
                        res.setHeader('content-type','application/json;cahrset=utf-8');
                        res.write( JSON.stringify( songList ) );
                        res.end();
                        break;
                        case '/banner':
                        res.setHeader('content-type','application/json;cahrset=utf-8');
                        res.write( JSON.stringify( bannerList ) );
                        res.end();                        
                        default:
                   
                        res.end('没有这个接口')
                        break;
                    }

                }else if( method === 'POST' ){ // 这个接口好像没用到

                    
                }else if( method === 'OPTIONS'){
                    res.writeHead(200,{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    })
                    res.end();
                }

            }
        }) )
})

gulp.task('default',['mockServer','httpServer'])