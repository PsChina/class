
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var url = require('url')
var qs = require('querystring')
var axios = require('axios')
var MockAdapter = require('axios-mock-adapter');

var mock = new MockAdapter(axios)

mock.onGet('/getData').reply(200,[1,2,3,4,5])
mock.onGet('/getData', { params: { id: '1' } }).reply(200,[1,1,1,1,1])

module.exports = {
    entry:'./entry.js',
    output:{
        filename:'bundle.js',
        path:__dirname+'/dist'
    },
    module:{
        rules:[
            {test:/\.js$/,use:['babel-loader']}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename:'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
    ,
    devServer:{
        contentBase:__dirname,
        port:8080,
        open:'http://localhost:8080/',
    //     proxy:{
    //         '/':{
    //             target:'/',
    //             onProxyReq:function(ProxyReq,req,res,next){
    //                 var method = req.method,
    //                     urlObj = url.parse(req.url),
    //                     pathname = urlObj.pathname,
    //                     getParams = qs.parse(urlObj.query)

    //                     var data = [1,2,3,4,5];

    //                     res.setHeader('Access-Control-Allow-Origin','*')

    //                     if(method === 'GET'){

    //                         switch(pathname){

    //                             case '/getData':
                                
    //                                 res.setHeader('content-type','application/json;charset=utf-8')
    //                                 res.write(JSON.stringify(data))
    //                                 res.end()

    //                             break;

    //                             default:
                                
    //                             break;
    //                         }


    //                 }
    //             }
    //         }
    //     }
    }
}