// 什么是 尾调用
// 举个栗子
function func(){

}

function fn(){
    return func();
}
// 在函数的结尾(return的时候) 调用一个函数 就是尾调函数

// 数列 等比数列 等差数列

// 斐波那契数列
// 1 2 3 4 5 6 7  8  9 
// 0 1 1 2 3 5 8 13 21
function Fibonacci(n,arg1 = 0 ,arg2 = 1){
    if(n===1){
        return arg1
    }
    if(n===2){
        return arg2
    }
    return Fibonacci(n-1, arg2 , arg2+arg1 ) // 尾递归
}

// 5
//time n                         return
//1    5 arg1 = 0 arg2 = 1       Fibonacci(n-1, arg2 , arg2+arg1 )

//2    4 arg1 = 1 arg2 = 1       Fibonacci(n-1, arg2 , arg2+arg1 )

//3    3 arg1 = 1 arg2 = 2       Fibonacci(n-1, arg2 , arg2+arg1 )

//4    2 arg1 = 2 arg2 = 3       arg2 ===> 3