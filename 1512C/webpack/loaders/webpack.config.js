var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./entry.js',
    output:{
        path:__dirname+'/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            // 上至下从右至左依次加载的
            // { test:/\.js$/,use:['babel-loader'] },
            { test:/\.(png|jpg|gif|svg|eot|ttf|woff)$/, use:['url-loader'] }, // 把这些文件当作一个模块来加载
            { test:/\.css$/, use:['style-loader','css-loader'] },  // 使得我们css 文件能够被 webpack 识别并且能够被 import 到js 文件中去
            { test:/\.html$/, use:['html-loader'] } // 使得html 文件能够被 webpack 识别 并且替换html 中的 图片等资源的包
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}

// 1 cnpm i webpack

// 2 cnpm i html-webpack-plugin

// 3 cnpm i css-loader 

// 4 webpack 回车

// 到目前为止 css-loader 只是把 css 变成 了 js  的一部分 还不是js形态的css 生效

// 如何让 js 形态的 css 生效呢 我们得使用 style-loader

// 1 cnpm i style-laoder

// 2 配置 module 下面的 rules 在 use 里面加上 style-loader 注意: loader 的加载是从上至下从右至左依次加载的

// 3 webpack 一下


// url-loader // 他是用来加载图片的 把图片变成base64格式的图片存储在js里面

// 1 cnpm i url-loader -D

// 2 配置 module 下面的 rules   

/**
 * { test:/\.(png|jpg|gif|svg|eot|ttf|woff)$/, use:['url-loader'] }, // 把这些文件当作一个模块来加载
 * { test:/\.css$/ , use:['style-loader','css-loader'] },  // 使得我们css 文件能够被 webpack 识别并且能够被 import 到js 文件中去
*/

// 3 webpack


// html-loader

// 1 cnpm i html-loader

// 2 module下面的 rules 里配置 {test:/\.html$/,use:['html-loader']}

// 3 webpack 一下

