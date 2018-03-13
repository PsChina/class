var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./entry.js',
    output:{
        path:__dirname+'/dist',
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:__dirname+'/dist'
        })
    ],
    module:{
        rules:[
            { test:/\.vue$/, use:[ 'vue-loader' ] } // 识别vue 文件
        ]
    },
    devServer:{
        contentBase:__dirname,
        open:'http://localhost:8080',
        before(app){

            app.get('/mock/indexlist',function(req,res,next){
                var datalist = [
                    { id:'1', name:'商品1' },
                    { id:'2', name:'商品2' },
                    { id:'3', name:'商品3' },
                    { id:'4', name:'商品4' },
                    { id:'5', name:'商品5' },
                    { id:'6', name:'商品6' },
                    { id:'7', name:'商品7' },
                    { id:'8', name:'商品8' },
                    { id:'9', name:'商品9' },
                    { id:'10', name:'商品10' },
                    { id:'11', name:'商品11' },
                    { id:'12', name:'商品12' },
                ]

                res.end( JSON.stringify(datalist) );
            })

            app.post('/mock/list',function(req,res,next){
                    var dataBase={
                        '1':{
                            name:'商品1',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '2':{
                            name:'商品2',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '3':{
                            name:'商品3',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '4':{
                            name:'商品4',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '5':{
                            name:'商品5',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '6':{
                            name:'商品6',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '7':{
                            name:'商品7',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '8':{
                            name:'商品8',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '9':{
                            name:'商品9',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '10':{
                            name:'商品10',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '11':{
                            name:'商品11',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        },
                        '12':{
                            name:'商品12',
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        }
                    }


                    // 根据id 请求数据
                    var postData = '';
                    req.on('data',function(chunk){ //
                        postData = chunk;
                    })
                    req.on('end',function(){
                        var postParams = JSON.parse( postData );
                        
                        //res.end(  JSON.stringify(dataBase[postParams.id]) ); // 响应
                        res.end( JSON.stringify({
                            name:`商品${postParams.id}`,
                            price:Math.floor(Math.random()*100) ,
                            color:`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`,
                            size:[Math.floor(Math.random()*100),Math.floor(Math.random()*100)]
                        }) )
                    })
                    
            })
        }
    },
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js' // 支持webpack import Vue from 'vue';
        }
    }
}