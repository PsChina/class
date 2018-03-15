// 对象的解构赋值 (不论是否含有Iterator接口 但是除了基本数据类型)
// 举个栗子
let {a,b} = {a:'我是a',b:'我是b'}
console.log(a,b) // => '我是a' '我是b'

// 但是我能像 解构具有Iterator接口 的对象一样瞎写变量名吗 比如

let {x,y,z} = {a:'我是a',b:'我是b',c:'我是c'};
console.log(x,y,z);

//能 但是会得到一个意想不到的结果 明明想让 x === '我是a'  y === '我是b' z === '我是c' 但却得到3个 undefined

// 说明不能瞎写。 必须要和 对象内的属性名一样才能被解构.

// 举个🌰

let {c,a,b} = {a:'我是a',b:'我是b',c:'我是c'};
console.log(a,b,c) // '我是a' '我是b' '我是c'

// 那么问题来了 ,我要是不像 定义变量a 或者说变量a 已经被定义了 我不能重定义怎么办。 

//其实 上面的写法是简写 全部的写法是 let {a:a,b:b,c:c} = {a:'我是a',b:'我是b',c:'我是c'}
// 什么意思呢 就是说 解构赋值的时候 上面的代码的意思是  将 右边对象内的a属性解构为变量a b属性解构为变量b c属性解构为变量c 于顺序无关

// 这样就解决了上面的问题

let {a:A,x:y} = {a:'我是aaaa',x:'我是xxxx'};

console.log(A,y) // '我是aaaa' '我是xxxx'

console.log(x) // x is not defined;  (上面的代码 a 和 x 只是一种模式 而不是变量)

// 那么如果左边的模式 右边不存在怎么办

let {xyz:abc} = {a:'a'}; // 解构失败  ({a:'a'}).xyz => undefined  (在这里我们自定义了变量名abc 而没有用简写{xyz} 这样变量名会和模式一样 合理使用会有很不错的效果)

console.log(abc) // undefined


// 默认值 和 上节课 的设置方法一样

let {a='default'} = {b:'b'};
console.log(a);

let {b='default'} = {b:'b'}
console.log(b);

// 那么问题来了 我是不简写怎么办
 
let {a:b='default'} = {b:'b'};

console.log(b);
// 以上2行代码 为不简写的形式


// 特殊对象 数组的解构
const arr = [1,2,3,4,5];
let { '0':first, [arr.length-1]:last } = arr;  //这里用到了一个没学的知识点 叫做 对 对象的扩展 动态属性名 以前属性名只能是字符串现在可以是表达式了。
// let [first,s,t,f,five] = arr; 能体现出上面写法的优势
console.log(first,last)

let {length} = '123'; // 可以解构 确实有length 属性

let {toString:fn} = 123;

let {toString:fn} = true;

// 无法解构 (报错)

let {anything:any} = null;

let {anything:any} = undefined;