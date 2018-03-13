
// 我想继承模块一
// 就是把模块一的 东西拿过来 但是我们不用 import

export * from './module1.js'; // 把 模块一的东西拿过来 并且在模块二全部都抛出

export default {
    name:'模块二',
    fn:function(){
        console.log('模块二的fn')
    }
}

// 只有 对象  但是 它 继承了 模块一