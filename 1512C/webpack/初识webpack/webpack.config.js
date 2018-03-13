
// 'gulp-rev' 
// 'gulp-rev-collector'
//  打包(合并)压缩js

// 打包js
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 用es5的语法 require 进来

module.exports = {
    entry:'./entry.js', // 暂时我们还没有这个 entry.js
    output:{ // 输出
        path:__dirname+'/dist', // 输出到dist
        filename:'bundle.js' // 加工完的js 名字叫做 bundle.js   捆 ， 束
    },
    plugins:[ // 插件   插件的复数  它是一个数组 
        new HtmlWebpackPlugin({ // 构造函数
            filename:'index.html', // 打包过后的文件名 默认值就是index.html 所以可以不写
            template:'./index.html' // 同级目录下的一个 index.html  自动把 bundle.js 加进来
        })
    ]
}
// 暂时先学这么多