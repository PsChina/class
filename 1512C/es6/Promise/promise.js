// 我们之前学习过 $q 这个服务 //它是 angularJS 对 promise 思想的一种实现


// 思想是一样的

// promise 思想

// promise 用于解决 异步编程的问题

// 异步编程对人来说 是较难理解的 

// 能不能以同步的方式 进行异步编程

// 能

// 如何实现 

// 用promise


// then 方法

// then 方法用于 注册 promise 的 成功的回调 和失败的回调

// catch 方法 用于注册 失败的回调 相当于  promise.then(null,function(){})

// done 方法 done方法 用于捕捉 promise 内部错误




new Promise( function(resolve, reject) {

    function error(){
        throw '出错了'  
    }

    let time = 4000*Math.random();  // 随机的时间

    if( time > 2000 ){ // 时间大于2秒
        setTimeout( ()=>{
            console.log(1);
            resolve('成功') // 成功
        } ,time)
    }else {
       setTimeout( ()=>{
           console.log(2);
            reject('失败') // 失败
       }  ) 
    }





} ).then(null,(error)=>{ // 相当与catch
    console.log(error) // 只会输出 失败 不会输出陈功
})

// then 方法 即能注册成功的回调也能注册失败的回调
/*
.catch( (error)=>{   // catch
    console.log(error)
} ) 
*/

