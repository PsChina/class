var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var qs = require('querystring');
var url = require('url');


module.exports = {
    entry:'./entry.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:path.resolve(__dirname, 'dist')
        })
    ],
    devServer:{ // 启动服务
        contentBase:path.resolve(__dirname, 'dist'),
        port:8080,
        open:'http://localhost:8080',
        before:function(app){ // mock 数据

            app.get('/mock/ceshi',function(req,res){ // 拦截 get请求的 /mock/ceshi 字段

                    var urlObj = url.parse(req.url),
                        getParams = qs.parse(urlObj.query) 
                    console.log( getParams );

                    res.setHeader('content-type','application/json;charset=utf-8');
    
                    res.write( JSON.stringify({ data:['这里是测试数据1','这里是测试数据2'] }) );
                
                    res.end();
    
            })

            app.post('/mock/login',function(req,res){ // 拦截 post 请求的/mock/login 字段

                    var str='';
                    req.on('data',function(chunk){
                        str+=chunk;
                    })

                    req.on('end',function(){
                        var postParams;

                        var isJsonStr = str.indexOf('{')!==-1&&str.indexOf('}')!==-1&&str.indexOf(':')!==-1
                        console.log( str );
                        if(isJsonStr){
                            postParams = JSON.parse(str);
                        }else{
                            postParams = qs.parse(str);
                        }
                        console.log( postParams.username, postParams.password )
                        res.setHeader('content-type','application/json;charset=utf-8;')
                        res.write(JSON.stringify({str:'这是一个假接口'}))
                        res.end();

                    })

            })
        }
    }

}

