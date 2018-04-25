var gulp  = require('gulp');


// task 是一个 挂载在 gulp 下的 方法 
/*
用来定义一个具体任务的。
*/
gulp.task('copyfile',function(){
    //src => source (原始资料)
    //pipe 是一个管道流 他会把上一级的输出当做这一级的输入 然后会调用传入的函数加工这个输入加工完成之后会输出加工结果
    gulp.src('./a.txt') 
        .pipe(gulp.dest('./copydone/'))
}) 

// src、dest 是挂在在gulp 下的
// pipe 不是挂在在gulp 下的

//总结 
// 学习了 
//1、gulp.task  
/*
第一个参数 是任务名称 string
第二个参数 是一个回调函数 里面是这个任务的具体实现  function
也可以是一个数组 里面存放其他任务名称 []
*/
//2、gulp.src 
/*
你需要拿到那个资源就把它的路径放进去就好了 类型是 string 放在第一个参数
*/
//3、gulp.dest 
/*
传递一个输出路径给这个方法 就能把上一级的结果给输出到那个路劲。 类型 string
*/
//4、gulp.src('url').pipe
/*
他是 gulp 的管道流 -> 你可以把它理解成 流水线 
他会把上一级的输出当成这一级输入
他自己的输出会被下一级的 pipe 当成输入
pipe 接收一个参数
这个参数的类型是 一个函数的调用 即接收一个函数的返回值
一个函数 fn
一个函数的调用 fn()
*/