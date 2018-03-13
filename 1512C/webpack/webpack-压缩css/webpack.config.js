var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩css

var path = require('path');

module.exports = {
    entry:'./entry.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            { test:/\.css$/, use:ExtractTextWebpackPlugin.extract({
                fallback:['style-loader'],
                use:['css-loader']
            }) }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:path.resolve(__dirname,'dist')
        }),
        new ExtractTextWebpackPlugin('style.css'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
          })
    ]
}