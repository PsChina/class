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


// 1 npm i babel-loader

