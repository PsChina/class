var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
module.exports = {
    entry:{
        js1:'./modules/module1.js',
        js2:'./modules/module2.js',
        js3:'./modules/module3.js',
    },
    output:{
        filename:'[name].js', // 多出口
        path:path.resolve(__dirname, 'dist'),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html',
            path:path.resolve(__dirname, 'dist'),
            chunksSortMode:function( chunk1, chunk2 ){ //'none', 'auto', 'dependency', '{function}'
                var sortArr = ['js1','js2','js3']
                var order1 = sortArr.indexOf(chunk1.names[0]);
                var order2 = sortArr.indexOf(chunk2.names[0]);
                return order1 - order2;
            }
        })
    ]
}