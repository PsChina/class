// babel-loader 用于识别es6 语法  (babel-core & babel-preset-es2015) || babel-preset-env 将它转换为es5语法
module.exports = {
    entry:['./entry1.js','./entry2.js'], // 多入口
    module:{ // 模块
        rules:[ // 规则
            { test:/\.js$/,use:['babel-loader'] }
        ]
    },
    output:{
        filename:'bundle.js', // 单出口
        path:__dirname + '/dist'
    }
}


// 1 npm i babel-loader // 识别es6的

// 2 npm i babel-core // babel 核心插件

// 3 npm i babel-preset-env // preset 前置的装置  env 是环境的 意思 它不仅能编译es6 还能编译 es7 , 8, 9 ... 等等

// 4 新建一个 .babelrc

// 5 在 .babelrc 内书写 

/**
 * {
 *  "presets":["env"]
 * }
 * 
*/

// 6 在 webpack.config.js 里写  module:{ rules:{ test:/\.js$/,use:['babel-loader'] } }


// ok 但是这还不够 因为有些提案阶段的es6 语法 还无法支持 如何做请接着往下看


// stage-0 提案 阶段的支持包 如何配置

// 1 npm i babel-presets-stage-0 -D

// 2 在 .babelrc 的  "presets":["XXX"] 内  加上 "stage-0"  例如 { "presets":["stage-0","env","es2015"]  }