'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app){ //es5
        app.get('/mock/test',(req,res,next)=>{ 
            // 拦截 method为 get, url 为 http://localhost:8080/mock/test 请求

            res.end( JSON.stringify({ list:['数据一','数据二'] }) )
 
        })

        const users = [ // 用户
            {   
                userID:1,
                account:'zhangsan',
                password:'123456'
            },
            {
                userID:2,
                account:'lisi',
                password:'abcd123'                
            }
        ]

        app.post('/mock/login',function(req,res,next){

            let dataStr = ''; 

            req.on('data',function(chunk){
                dataStr+=chunk;
            })

            req.on('end',function(){
                // 但是 str 是个字符串
                let postParams = JSON.parse( dataStr );

                console.log( postParams.account , postParams.password );
               

                let userExist = false; // 默认未找到用户
                let success = false; // 默认登录未成功

                // 首先要看一下帐号是否存在Y
                for (const user of users) {
                    if(user.account === postParams.account) { // 帐号相等
                        userExist = true; // 用户存在
                        if(user.password === postParams.password) {
                            success = true; // 登录成功
                        }
                    }
                }

                // let result = userExist ? { success } : userExist ;

                if(userExist) {
                    if(success){
                        res.end(JSON.stringify({state:1})) //登录成功
                    }else{
                        res.end(JSON.stringify({state:0})) // 密码错误
                    }
                } else {
                    res.end(JSON.stringify({state:-1})) // 用户不存在请注册后再登录
                }

            })

        })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
