var UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩js 的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry:'./entry.js',
    output:{
        filename:'bundle.js',
        path: __dirname + '/dist',
    },
    plugins:[
        new UglifyJsPlugin(), // 压缩js
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:__dirname + '/dist',
            minify:{ // 压缩html  以及html 中的 css js
                removeComments: true,//清除HTML注释
                collapseWhitespace: true,//压缩HTML
                collapseBooleanAttributes: true,//省略布尔属性的值 <input checked='true'/> ==> <input />
                removeEmptyAttributes: true,//删除所有空格作属性值 <input id='' /> ==> <input />
                removeScriptTypeAttributes: true,//删除<script>的type='text/javascript'
                removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type='text/css'
                minifyJS: true,//压缩页面JS
                minifyCSS: true//压缩页面CSS
            }
        })
    ]
}