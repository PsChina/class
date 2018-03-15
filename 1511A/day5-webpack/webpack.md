# webpack
webpack 打包你的一切

## 如何使用
```js
/*
es5

1 、 npm i webpack -g
2 、 npm i webpack --save-dev / -D
3 、 touch webpack.config.js
4 、
*/
    var webpack = require('webpack')

    var HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包移动html

    module.exports = {

        entry: './entry.js', // 可以是 数组 字符串 对象 [js的入口]
        output:{ // 对象 [js出口]
            filename:'bundle.js', // 打包过后的js文件名
            path:__dirname+'/dist' // 打包过后你要将 js 放置的输出路径
        },
        plugins:[
            new HtmlWebpackPlugin({ // 打包移动 html 的
                template:'./index.html',
                filename:'index.html',
                path:__dirname+'/dist'
            })
        ],
        module:{
            rules:[
                { test:/\.js$/,use:['babel-loader'] } // es6,7... => es5
                /**
                 * 如何配置 babel
                 * 1、npm i babel-loader --save-dev 是用于使得webpack能识别es6语法的
                 * 2、npm i babel-core --save-dev es6->es5的核心库
                 * 3、npm i babel-preset-env --save-dev es6,7,8...等的编译插件
                 * 4、touch .babelrc 
                 * 5、 { "presets":['env'] }
                 * 
                 * 将es6,7,8等等转换成es5是很有必要的，这使得你写的代码能在绝大多数浏览器中运行。
                 * 新的语法功能强大，但是浏览器支持不完善。
                 * 所以babel+webpack使得我们能用 强大的语法编写程序，并且代码最终是大多数浏览器能识别的。
                 * **/
            ]
        }

    }


// es6
//1、 webpack.config.js => webpack.config.babel.js
//2、 touch .babelrc  npm i babel-preset-env --save-dev
//3、 in .babelrc  { "presets":["env"] } 
//4、 以下
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    //entry...
}

```