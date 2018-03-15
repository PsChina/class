// let
// 1、块级作用域 
var a = 10;

if(true){ // es5 里面 if 没有块级作用域  有 函数级别的作用域
    var a = 20;
}

console.log(a);  // = > 20

// 如果你用 let 命令 就不一样了

let b = 10;

if(true){
    let b = 20;
}

console.log(b);

// 暂时性死区

// 不能在定义之前使用 , 在后面有定义。
let c = 'temp';

{
    // console.log(c); // 报错 在声明之前使用。
    let c = 'in side';
}


'use strict'
// 当函数声明提升 遇到 es6 块级作用域
function fn(){
    console.log('I am outside!');
}
(function(){
    if(true){ // 这个逻辑无所谓 因为 函数声明提升在代码运行之前 所以和逻辑本身无关
        function fn(){
            console.log('I am inside!');
        }
    }
    fn();
})();

//上面的代码在es5中 会输出 I am inside! es6 中会输出 I am outside! 


//  do 表达式 能使得 块及作用域 返回最后一行代码的返回值。
// 比如
// let x = do {
//     let a = 1;
//     a = a + 1;
// }
// console.log(x) // => 2

// 总结 let 命令的特新

// 1 块级作用域 类似于 函数带来的作用域
// 2 没有变量声明提升 ， 但有 暂时性死区。
// 3 不能重复声明同名变量在同一作用域内。

// 4 使得typeof变为了不安全操作。
// 5 解决了es5 语法出现意想不到的情况的问题。



