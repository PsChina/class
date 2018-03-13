var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // entry:'./entry.js',// 单入口 不会重复引入 jq
    // entry:['./module/module1.js','./module/module2.js'], // 多入口 单出口 也不会重复引入 jq
    entry:{
        module1:'./module/module1.js',
        module2:'./module/module2.js'
    },
    output:{
        path:__dirname + '/dist',
        // filename:'bundle.js' // 单出口
        filename:'[name].js' //多出口
    },
    module:{

    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:__dirname + '/dist'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'jquery.js',
            filename:'commonsChunk.js', // 公共模块
            chunks: 2
        })
    ]
}

// optimize 使... 最优化

// 1 引入 webpack  require 一下

// 2 找到 plugins  写好这个插件 new webpack.optimize.CommonsChunkPlugin()

// 3 传递一个对象进去

/**
 * name : 你重复的模块名 （文件名）  Array String
 * filename : 你的生成的公共模块名 (文件名) String
 * chunks : 重复的次数  Number
 * {
 *   name : 'jquery.js', //文件名
 *   filename:'commonsChunk.js', //你的生成的公共模块名 (文件名)
 *   chunks: 2 // 重复的次数
 * }
*/