/**
 * @description 函数默认值的扩展
*/

 // es5
 // 为函数定义默认值是通过 || 或运算符来做的
 function fn(param1, param2) {
    var param2 = param2 || 'default' // 为 参数二设置默认值
    console.log( param1 , param2 );
 }


 // 这样做是存在缺点的
fn( 1 );
// 1 "default"
undefined
fn( 1 , false)
// 1 "default"
 // 当我 希望 传递一个 false 或者 null 的时候 就不会按照我的意思去传递

 // es6

 function fn(param1, param2 = 'default'){
     console.log( param1 , param2 )
 }

 fn( 1 )

 // 1 "deault"

 fn( 1 , false )

 // 1 false

 fn( 1 , null )
 // 1 null

fn( 1 , undefined )

 // 1 "default"

// 严格等于 undefined 才会触发 默认值的 求值 和 赋值


/**
 * @description 同名参数报错
*/

function fn( x , x , y ){ // 不报错(这个注意 默认是es5 语法 除非含有es6语法才会生效)
    // 在es6 中参数名必须保证是唯一的 否则报错
}

function fn( x , x , y = 1 ){ // 含有es6 语法 开启es6 的规则
    // 报错 参数名 重名
}

/**
 * @param rest
 * @description rest 参数
*/

function fn(param1 , param2='default' , ...rest){
    console.log( param1 , param2 , rest )
    // 把传入的多余的参数 统统收集到一个数组里面 给你用
}

fn(1);

fn(1,2);

fn(1,2,3);

fn(1,2,3,4)

fn(1,2,3,4,5);

// rest 参数必须放到 末尾

function fn(param1, ...myRest , param2){
    // 报错 rest 参数必须放在末尾 参数名可以自定义

}


function fn(param1, param2, ...瞎取名){ 
    // 合法
    console.log(瞎取名)
}
undefined
fn(1,2,3,4)
//VM467:3 (2) [3, 4]
//undefined
//  我这是为了告诉你变量名可以自定义 大家不要用中文当变量名哈


/**
 * @attribute length 
 * @description 参数长度 ...rest 不计入length个数
*/
function fn2( param1, param2, param3 ,param4 ){}

fn2.length
//4
function fn2( param1, param2, param3 ,param4 , ...rest){}

fn2.length
//4


// name 属性

// 存在 名字优先读取名字 否则读取 接收函数的变量名

// 既不存在 name 又不存在接受者 那么 名字是 ""     type是string



/**
 * @description 箭头函数
*/

const fn = a=>a;  // 基本用法  可以看出极其简练  但是只有一个参数

//等价于 (从函数层面来说 不讨论 const)

var fn = function(a){ // 太罗嗦了
    return a;
}


// 多个参数

const add = (a,b) => a+b; // 定义一个加法  但是 只有一条语句


// 多条语句

const abs = (num) => { // 用 {} 括起来就好了
    let result
    if(num<0) {
        result = -num
    }  else {
        result = num
    } 
    return result
}

/**
 * @description 箭头函数 绑定当前上下文 this
*/
this // 指向 window  当前上下文this 指向window
var name = '外部name window下的name'
const obj = {
    name:'内部name obj下的name',
    getName:()=>{
        return this.name; // 这个this 因为在箭头函数内部 所以 就是 window 不需要等到运行时来确定 定义时就确定了
    },
    getNameES5:function (){
        return this.name; //当前作用域
    }
}

obj.getName()

// 外部name window下的name 

// 它是 直接绑定 当前上下文的 this


// 箭头函数 没有 arguments

const fn = ()=>{
    console.log(arguments) // 报错 arguments is not defined
}

// 如何解决这个问题

const fn2 = (...arguments)=>{  // ...rest
    console.log( arguments )
}

// 介绍 yield 命令 和 Generator 函数

function* Generator(){  // 状态机
    yield console.log('第一步');
    yield console.log('第二步');
    yield console.log('第三步');
    return console.log('完成');
}

// 箭头函数 不能用来做 Generator 函数 也不能在 箭头函数内部使用 yield 命令



// 不能使用 new 关键字来调用箭头函数 也就是说 箭头函数不能用于定义构造函数

// 因为 箭头函数的 this 指向 早已被确定并且被绑定了 而new关键字会改变this 指向所以不能

// 双:: 运算符

var obj = {
    name:'zhangsan'
}

function logName(){
console.log(this.name)
}

obj::logName; // 这个是个提案 需要用babel + state-0 来编译 等价于 logName.call(obj);
logName()

