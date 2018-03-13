module.exports = {

    entry:{
        bundle1:'./entry1.js',
        bundle2:'./entry2.js',
        bundle3:'./entry3.js'
    },
    output:{
        filename:'[name].js', // 动态名称如何写 
        path:__dirname+'/dist'
    }

}
// webpack 多入口 多出口的配置