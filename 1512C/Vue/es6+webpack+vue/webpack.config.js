var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports = {
    entry:'./entry.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:path.resolve(__dirname, 'dist')
        })
    ],
    devServer:{
        port:8080,
        contentBase:path.resolve(__dirname, 'dist'), // 服务器的根目录
        open:'http://localhost:8080'
    }
}


