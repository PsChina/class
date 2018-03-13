
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path')

module.exports = {
    entry:'./src/entry.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            { test:/\.js$/, use:['babel-loader'] },
            { test:/\.css$/, use:['style-loader','css-loader'] },
            { test:/\.(png|jpg|svg|gif|eot|ttf|woff)$/, use:['url-loader'] },
            { test:/\.html$/, use:['html-loader'] }, 
            { test:/\.vue$/, use:['vue-loader'] } //需要下载 1 vue-loader 2 vue-template-compiler
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:path.resolve(__dirname,'dist')
        })
    ],
    resolve:{
        alias:{
            'vue':'vue/dist/vue.js'
        }
    },
    devServer:{
        contentBase:__dirname, //path.resolve(__dirname,'dist')
        open:'http://localhost:8080',
        before(app){
            app.get('/mock/hot',function(req,res,next){
                const data = [
                    {
                        src:'./src/img/1.jpg',
                        text:'复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：'
                    },
                    {
                        src:'./src/img/2.jpg',
                        text:'复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：'
                    },
                    {
                        src:'./src/img/3.jpg',
                        text:'复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：'
                    }
                ]
                res.end(JSON.stringify(data))
            })
            app.get('/mock/starrank',function(req,res,next){
                const data = [
                    {
                        src:'./src/img/4.jpg',
                        text:'复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：'
                    },
                    {
                        src:'./src/img/5.jpg',
                        text:'复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：'
                    },
                    {
                        src:'./src/img/6.jpg',
                        text:'复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：'
                    }
                ]
                res.end(JSON.stringify(data))
            })
            app.get('/mock/letterrank',function(req,res,next){
                const data = [
                    {
                        src:'./src/img/7.jpg',
                        text:'复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：'
                    },
                    {
                        src:'./src/img/8.jpg',
                        text:'复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：'
                    },
                    {
                        src:'./src/img/9.jpg',
                        text:'复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：'
                    }
                ]
                res.end(JSON.stringify(data))
            })
        }
    }
}
