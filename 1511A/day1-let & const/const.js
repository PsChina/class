// const
const a = 1;

//a = 2; // TypeError: Assignment to constant variable. 类型错误 不能给常量变量赋值。

const b = {a:1};

b.a = 2;

console.log(b)
//=> {a:2}

// 总结 const 只能保证 变量指向的地址不变 不能保证地址所指向的内容变不变。

// 块级作用域 与let 一样

// 没有变量声明提升 && 存在暂时性死区 与let 一样

// 不可重复声明 与 let 一样

// 声明后需要立即赋值

//const c; //报错 因为用const 声明的变量不能被改变 然而一个 undefined 是没有存在的必要的。所以它报错了

const c = 'value';

// 顶层对象

//  let const 生成的 变量 不会挂载在顶层对象上 也就是说 在:

// 1 浏览器环境 let a = 1 window.a 是 undefined
// 2 node环境 let a = 1 global.a 是 undefined
// 3 webwork环境 let a = 1 self.a 是 undefined

//  他们三个的 公共顶层对象是 this 
//  但是缺点是 this 是一个 随着上下文改变的 东西 所以不稳定 
//  你可以 用es6 提案获取稳定的 顶层对象 前提是 用 babel 编译工具的 Stage-0 来编译

/*
// CommonJS 的写法
require('system.global/shim')();

// ES6 模块的写法
import shim from 'system.global/shim'; shim();

*/



// 也可以是用一下蹩脚的方法
/*
//1
(
    typeof window !== 'undefined' ? 
    window 
    : 
    (
        typeof progress === 'object' && typeof require === 'function' && typeof global === 'object') ? 
        global 
        : 
        this
    )
        
)
//2
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

*/