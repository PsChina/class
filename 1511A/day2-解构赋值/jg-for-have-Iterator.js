// 基本概念
// es6 允许 从原有的对象或者数组中 提取值 并且对新的变量进行赋值 这被称为解构。Destructuring

// 先用 对具有Iterator接口的对象进行解构来举例 最典型的含有Iterator接口的对象就是数组啦。

// 例1
let [a,b,c] = [1,2,3]; 
console.log(a,b,c) // => 1 2 3

// 嵌套解构

let [d,[e,f],g] = [{b:'b'},[{a:'a'},1],true];


// 解构不成功 (打破const 定义必须赋值的约定)  //你要赋值的变量 比你的值要多 

const [h,i] = [10];

console.log(h,i) // => 10 undefined

 
// 不完全解构 // 你要赋值的变量比你的值要少

let [j] = [1,2];

/*------------以上都属于正常的代码 不会报错-----------*/

// 无法解构 (报错)

let [ foo ] = 1; // 由于 等于号 左边 告诉计算机你要对一个数组(含有Iterator 接口的对象)进行解构赋值 但是 等于号右边 你却给了一个 数字 说好的数组呢 (当然了 不一定要数组 只需要一个 含有Iterator 接口的对象即可 比如以下代码)

let [c1,c2,c3] = 'string';

console.log(c1,c2,c3);  // => 's' 't' 'r'


// 解构赋值的 默认值

let [a1='default',a2] = [];

console.log(a1,a2) // => 'default' undefined;

let [a3='default',a4] = [1,2];

console.log(a3,a4) // => 1 2

// 什么情况下 会读取默认值 在严格等于undefined 的情况下。

// 例如

let [a5='default'] = [null];

console.log(a5) // => null;

let [a6='default'] = [undefined];

console.log(a6) // => 'default'


// 默认值的惰性求值

function getDefaultVal(){
    let val = 1+1;
    console.log('打印了一个'+val);
    return val;
}

let [a7=getDefaultVal()] = [null]; // 不打印
let [a8=getDefaultVal()] = [undefined]; // 打印
// 猜猜会调用几次函数
//4 次? 我的天

//答案是一次

// 默认值必须提前声明

//let [x=y] = []; // 报错 y 没有定义

const y1 = 1;

let [x1=y1] = []; //  x1 === 1;












