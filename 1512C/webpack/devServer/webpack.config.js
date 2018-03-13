var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports={
    entry:'./entry.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            { test:/\.css$/, use:['style-loader','css-loader'] }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:path.resolve(__dirname,'dist')
        }),
        new webpack.HotModuleReplacementPlugin()// 热替换
    ],
    devServer:{ // 本地服务器 http://localhost
        port:8080, // 服务器端口号
        contentBase:path.resolve(__dirname,'dist'), // 服务器根目录
        open:'http://localhost:8080' // 自动打开浏览器
    }
}
// 