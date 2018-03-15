var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin')  // 打包移动html

module.exports = {

    entry: './entry.js', // 可以是 数组 字符串 对象 [js的入口]
    output: { // 对象 [js出口]
        filename: 'bundle.js', // 打包过后的js文件名
        path: __dirname + '/dist' // 打包过后你要将 js 放置的输出路径
    },
    plugins: [ // 插件
        new HtmlWebpackPlugin({ // 打包移动 html 的
            template: './index.html',
            filename: 'index.html',
            path: __dirname + '/dist',
            minify:{
                    removeComments: true,//清除HTML注释
                    collapseWhitespace: true,//压缩HTML
                    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked='true'/> ==> <input />
                    removeEmptyAttributes: true,//删除所有空格作属性值 <input id='' /> ==> <input />
                    removeScriptTypeAttributes: true,//删除<script>的type='text/javascript'
                    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type='text/css'
                    minifyJS: true,//压缩页面JS
                    minifyCSS: true//压缩页面CSS
                }
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: { // 模块
        rules: [
            { test: /\.js$/, use: ['babel-loader'] } // es6,7... => es5
            /**
             * 如何配置 babel
             * 1、npm i babel-loader --save-dev 是用于使得webpack能识别es6语法的
             * 2、npm i babel-core --save-dev es6->es5的核心库
             * 3、npm i babel-preset-env --save-dev es6,7,8...等的编译插件
             * 4、touch .babelrc 
             * 5、 { "presets":['env'] }
             * **/
        ]
    },
    devServer: {
        port: 8080,
        contentBase: __dirname,
        open: 'http://localhost:8080'
    }

}
