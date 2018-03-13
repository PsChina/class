/**
 * @description 解构赋值
 */



/**
 * 
 * @description 数组的解构
 * 
*/

//  以前定义 三个变量如下

var a = 1;

var b = 2;

var c = 3;

// 以上会冗余  var 、 = 

// 优化

var a = 1 , 

    b = 2 ,

    c = 3 ;

// 任然 冗余 了 , 、 =

// 如何去掉这些冗余 

// es6 提供了 解构赋值 = > 对数组的解构
// (基本写法)
let [a,b,c] = [1,2,3]; // 一目了然 将 1， 2， 3 分别赋值给 a, b, c


// 解构不成功

let [foo] = []; // foo 是一个变量名 无意义的变量名 就像咱中文里面 张三和李四一样 foo / bar

foo // undefined 未定义

// 不完全解构

let [num1,num2,num3] = [1,3,5,7,9]; // 只有 1 3 5 得到了解构 7 ， 9 并没有被解构赋值 这就是不完全解构


// 无法解构
// 对数组的解构 一定是需要一个能够被遍历的对象 也就是含有迭代器的对象
let [bar] = 1

let [bar] = 'string' // 它具有 iterable 接口 能被 对数组的解构赋值所解构 

console.log(bar) // s


// 默认值

// 在解构 不成功 或者 被解构的值 === undefined 的情况下 可以触发默认值的求职 和赋值过程

let [bar='default'] = []

// 惰性求值

// 意思是只有在 解构不成功 或者 被解构的值 严格等于 undefined 的情况下才会触发默认值的求值


// 默认值必须提前声明 （不能使用一个不存在的东西）

// 有点像咱们的 暂时性死区一样 就是说你不能使用一个未定义的变量




// 总结 对数组的解构赋值

// 1 boolean {} NaN undefied null 无法被 对数组的解构 所解构

// 2 含有 iterator 接口的 对象能被 对数组的解构 所解构 不含有的不能

// 3 在解构过程中 遇到 undefined 或者 解构不成功 会触发默认值的  求值 和 赋值

// 4 默认值 只在遇到 undefined 或者 解构不成功 是才会被计算 其他情况不会运行 它是惰性的

// 5 对一个 含有iterator 接口的 对象 解构它的一部分 这叫做 不完全解构

// 6 对一个 含有iterator 接口的 对象 解构 超出它的值 会导致 解构不成功


// 对对象 的解构赋值

// 基本用法

let { age, name } = { name:'zhangsan',age:24 } 

// 这是一种简写 完整写法是 { name:name,age:age }

console.log( name+'是我的同学他'+age+'岁' )

// 解构失败(对对象的解构)  对数组的解构 叫 解构不成功

let { length } = { push:function(){} }

length // undefined


// 嵌套解构

const obj = {
    name:'zhangsan',
    age:30,
    children:{
        name:'二嘎子',
        age:13,
        toys:['丑小鸭','小天鹅']
    }
}

let { name : father , children:{ name : childrenName , age:childrenAge  }  } = obj;

console.log( father , childrenName , childrenAge );

// 默认值 

// 当 解构失败 或者 解构成功但是 值为undefined 的情况下 会触发默认值的 惰性求值 和 赋值

let {x = 60} = { x:undefined } // 解构成功 但是 x的值为 undefined 触发默认值


let { z = 100 } = { y:1 } // 解构失败 触发默认值


// 默认值的惰性求值


// 对特殊属性的解构

let { '0':first, '1':middle, '2':last } = [1,2,3]

