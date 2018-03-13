//如果 await 关键字后面跟的不是一个promise 则会隐式调用 Promise.resolve 将它转换成一个promise 对象

// await 等待 相当于 Generator 函数内的 yield + 自动调用 .next()

async function fn() {  // 相当于 function* fn(){}
    await new Promise(function (resolve,reject) {  // 等待这个 promise完成 再接着往下走
        const num = Math.random()*3*1000;
        setTimeout(()=>{
            resolve(num)
        },1000)
    }).then((num)=>{
        console.log(`第一个随机数是${num}`,new Date().getTime())
    })

    await new Promise(function (resolve,reject) { //等待 第二个promise函数执行之后再执行后面的代码
        const num1 = Math.random()*3*1000;
        console.time()
        setTimeout(()=>{
            resolve(num1)
        },2000)
    }).then((num1)=>{
        console.log(`第二个随机数是${num1}`,new Date().getTime())
    })

    await new Promise(function (resolve,reject) { 
        const num2 = Math.random()*3*1000;
        setTimeout(()=>{
            resolve(num2)
        },3000)
    }).then((num2)=>{
        console.log(`第三个随机数是${num2}`,new Date().getTime())
    })

   console.log('ok')
}