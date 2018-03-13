var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');


module.exports = {
    entry: './entry.js',  // 入口 1
    output: {  // 出口 2
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [ 
        new HtmlWebpackPlugin({ //3 html
            template: './index.html',
            path: path.resolve(__dirname, 'dist')
        })
    ],
    module: { // 4 各种loader 固定这样写 没有毛病 packagejson 在后面
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
            { test: /\.html$/, use: ['html-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|png|gif|svg|)$/, use: ['url-loader'] }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: __dirname,
        open:'http://localhost:8080/',
        before:function(app){ // mock数据
            app.get('/mock/test',function(req,res,next){ // get 请求

                const data = [ // 数据
                    {
                       "type":"热门推荐",
                       "main":[["./src/img/1.jpg","北京最近地气的街道于文华，在这里体验市井生活"],["./src/img/2.jpg","北京保存最完美，故事最多。故居最大的古街巷，邀您一起来感受"],["./src/img/3.jpg","北京最近地气的街道于文华，在这里体验市井生活"]]
                    },
                    {
                       "type":"星级排序",
                       "main":[["./src/img/4.jpg","北京最近地气的街道于文华，在这里体验市井生活"],["./src/img/5.jpg","北京保存最完美，故事最多。故居最大的古街巷，邀您一起来感受"],["./src/img/6.jpg","北京最近地气的街道于文华，在这里体验市井生活"]]
                    },
                    {
                       "type":"字母排序",
                       "main":[["./src/img/7.jpg","北京最近地气的街道于文华，在这里体验市井生活"],["./src/img/8.jpg","北京保存最完美，故事最多。故居最大的古街巷，邀您一起来感受"],["./src/img/9.jpg","北京最近地气的街道于文华，在这里体验市井生活"]]
                    }
               ]
                res.end( JSON.stringify(data) );// 响应数据
            }) 

            app.post('/mock/post',function(req,res,next){ // post请求 自己去看之前的代码
                const parmasStr = ''
                req.on('data',(chunk)=>{
                    parmasStr += chunk;
                })
                req.on('end',()=>{

                })
            })
        }
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}


/*packgejson
{
  "dependencies": {
    "axios": "^0.18.0",
    "vue": "^2.5.13"
  },
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.1",
    "css-loader": "^0.28.10",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^2.30.1",
    "style-loader": "^0.20.2",
    "url-loader": "^0.6.2",
    "webpack": "^3.11.0"
  }
}


*/