class Div{
    constructor(){ // 子类调用super 的时候会被调用
        this[0] = this.ele = document.createElement('div'); // 新建div 几乎所有元素都有的 一个盒子
    }
    css(obj){
        for( let key in obj ){
            this.ele.style[key] = obj[key]; // 把对象里面的样式给了 div
        }
        return this; // 实现链式调用
    }
    on(events){
        for( let eventName in events ){
            this.ele.addEventListener(eventName,events[eventName]); //添加事件
        }
        return this;
    }
    attr(naAtts){ // innerText class style href src
        for(let attr in naAtts){
            this.ele[attr] = naAtts[attr];
        }
        return this;
    }
}

class Button extends Div{
    constructor(fn){ // es5 里面是先实例化 子类 再将子类的 原型指向父类 这是不合逻辑的 怎么可能先有儿子再有爸爸呢
        // 在 es6 里面 在实例化子类的时候必须先实例化 父类  
        // 构造函数承担了 实例化对象的任务 
        // 所以在子类的构造函数内 在使用this 之前 必须 实例化父类 
        // 如何实例化 super();
        super(); // 新建div
        this.ele.onclick = fn; // onclick 为空
        this.ele.style.userSelect = 'none';  // 按钮特有的
        this.ele.style.cursor = 'pointer'; // 按钮特有的
    }
}


// class Button {
//     constructor(){ // 子类调用super 的时候会被调用
//         this[0] = this.ele = document.createElement('div'); // 新建div 
//         this.ele.onclick = fn; // onclick 为空
//         this.ele.style.userSelect = 'none';  // 按钮特有的
//         this.ele.style.cursor = 'pointer'; // 按钮特有的
//     }
//     css(obj){
//         for( let key in obj ){
//             this.ele.style[key] = obj[key]; // 把对象里面的样式给了 div
//         }
//         return this; // 实现链式调用
//     }
//     on(events){
//         for( let eventName in events ){
//             this.ele.addEventListener(eventName,events[eventName]); //添加事件
//         }
//         return this;
//     }
//     attr(naAtts){ // innerText class style href src
//         for(let attr in naAtts){
//             this.ele[attr] = naAtts[attr];
//         }
//         return this;
//     }    
// }

// es6 的继承 就是写法高级点 语法糖 包装了一下


// es5 模拟实现 必须用 new 关键字调用的 构造函数

function Point(){
    if(new.target === undefined){
        throw '必须使用 new 关键字调用 该构造函数'
    }else{
        this.point = '123';
    }
}
/*
new.target
可以在一个函数内部使用 
如果它使用new 调用的 
那么 new.target 不为 undefined

直接调用的函数为 undefined
否则为空


function Fn(){
    console.log(new.target)
}

Fn() 

// undefined

new Fn()

// 输出函数本身

*/
