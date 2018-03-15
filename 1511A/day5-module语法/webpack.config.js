var webpack = require('webpack');


module.exports = {
    entry:['./js/entry.js'], //js入口
    output:{ //js出口
        filename:'bundle.js',
        path:__dirname+'/dist'
    }  
}