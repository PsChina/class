// 第五种声明变量的方法 class
class Foo{
    constructor(){ // 构造函数 构造器
        this.name = 'foo';
    }
}

let foo = new Foo()

console.log(foo);


// 1 constructor 构造器
// 2 class 必须用new 调用
// 3 class 声明 类型是 函数 function
// 4 默认返回 this
// 5 不存在变量声明提升
// 6 this指向是动态的 （和原来我们学习的this一样） 在es6 里面 除了箭头函数是被绑定的
// 7 set get 函数 能够重写 setter 设置器 和 getter 获取器  ( =号左边的 .语法会调用setter器 右边的会抵用getter器 )
// 8 静态方法 class Bar             Bar.from 将一个不属于Bar类的东西转换成Bar类

class Bar{
    constructor(){
        this.name = 'bar';
        return { // 返回的不是 this 所以new 出来的实例 不属于 Bar 这个类型
            name:'object'
        }
    }
}



const bar = new Bar();

class Bar {  // 不存在变量声明提升 所以会报错

	constructor() {
		this.name = 'bar';
	}

}
//Bar is not defined

// es5 是存在 声明提升的

var bar = new Bar();

function Bar(){
    this.name = 'bar';
}

console.log(bar);

// 6

window.name = 'window'
var obj = {
	name:'obj',
	getName(){
		console.log(this.name);
	}
}
obj.getName() // obj

undefined
var fn = obj.getName
undefined
fn() // fn 是属于 window的 相当于 window.fn() 所以this 是 window


// 定义一个类 
//class Foo

// 书写构造函数
// constructor

// 定义一个属性
// constructor(){
//    this.attr = null;
//}

// 重写 setter getter 器 使得功能正常

// set attr(){}

// get attr(){}

class Bar{
    constructor(){
        this.name = null // . 语法在等于号的 左边 所以
    }
    set name(newValue){ // set 方法 堆栈溢出 
        this._name = newValue // 设置 一个新值给 name
        // 加_解除 循环调用 在 get方法 里返回这个加了_的属性
    }
    get name(){
        return this._name;
    }
}


// 静态方法

class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){} //没有做具体实现
    sleep(){} //没有做具体实现
}

class People{
    static from(obj){ // 静态方法 使得不属于人类的类 变成人类
        // 只能被构造函数 或者类名来调用
        return new People(obj.name);
    }
    constructor(name){ // 在new 的时候可以接收一个名字
        this.name = name; // undefeind;
    }
    eat(){
        console.log(`${this.name}在吃饭`)
    }
    sleep(){
        console.log(`${this.name}在睡觉`)
    }
    play(){
        console.log(`${this.name}在打豆豆`)
    }
}


// 用 迭代器 来实现一个 数组(伪数组)

class ArrayLike{
    constructor(...args){ // rest 参数
        this.arrElement = args;
        this.length = 0
        for( let i = 0 ; i<args.length ; i++ ){
            this[i] = args[i];
            this.length++;
        }
    }
    *[Symbol.iterator](){ // Generator 函数 他是一个 状态机 通过 next() 来改变状态
        for( let val of this.arrElement ){
            yield val;
        }
        // 这样 这些东西就能被 for of 循环了
    }
}