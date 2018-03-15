var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{ // 多入口
        module2:'./src/js/entry2.js',
        module1:'./src/js/entry1.js',
        module3:'./src/js/entry3.js'
    },
    output:{
        filename:'[name].js', // 多出口
        path:__dirname+'/dist' // 自动生成一个dist 文件夹
    },
    module:{
        rules:[
            //  css-loader 为了使得webpack能识别.css 结尾的 文件
            // style-loader 为了把 js 形式 css 能够正常在html 中有效
            { test:/\.css$/,use:['style-loader','css-loader'] }, // loader 的加载顺序是 从上往下 从右往左执行
            { test:/\.(png|jpg|gif|svg)$/,use:['url-loader'] }, // 加载文件 图片的 内部含有 file-loader
            { test:/\.html$/,use:['html-loader'] } //使得 webpack 能识别 .html文件
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            chunksSortMode: function (chunk1, chunk2) { // 多入口 多出口的依赖顺序。
                var order = ['module3', 'module2','module1'];  // 这是你的顺序
                var order1 = order.indexOf(chunk1.names[0]);
                var order2 = order.indexOf(chunk2.names[0]);
                return order1 - order2 ;  
            },
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:'jquery',
            filename:'jquery.js',
            minChunks:3
        })
    ],
    devServer:{
        port:'8080',
        contentBase:__dirname,
        open:'http://localhost:8080'
    },
    devtool:'eval', // 打包的模式 模式不同会使得 打包的速度不一样 所以开发环境我们选择较快的打包方式 比如eval
}
/*
csdn 博客推荐
开发环境推荐：
cheap-module-eval-source-map  如果想更快的构建可以用 eval

生产环境推荐：
cheap-module-source-map


开发环境推荐：
eval
生产环境推荐：
source-map

自己研究打包模式
http://www.css88.com/doc/webpack/configuration/devtool/

*/