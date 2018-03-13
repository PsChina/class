var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:'./entey.js', // 开发环境
    output:{
        filename:'bundle.js',
        path:__dirname + '/dist' // 生成的文件所在的目录 发布环境
    },
    module:{
        rules:[
            // { test:/\.css$/,use:['style-loader','css-loader'] }
            { test:/\.css$/,use: ExtractTextWebpackPlugin.extract({
                fallback:['style-loader'],
                use:['css-loader']
            })}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:__dirname + '/dist'
        }),
        new ExtractTextWebpackPlugin('style.css')
    ]
}