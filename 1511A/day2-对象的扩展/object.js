// 对 '对象' 的扩展
// es5 定义对象
var b = 10;
var obj2 = {b:b};

// 1 属性的简写
let a = 10;

let obj = {a};

console.log(obj);


// 2 方法的简写

// es5 
var obj3 = {
    fn:function(){
        console.log('我是fn')
    }
}

// es6

let obj4 = {
    fn(){
        console.log('我是新潮的fn')
    }
}

// 3 允许在定义时 动态计算属性名 (表达式)
let A = 'a';
let B = 'b';
let obj5 = {
    [A+B]:'123'
}
// obj5 =>  {"ab":"123"};

// 4 Object.is();

// 可用于判断 NaN 是不是　NaN　
// 用于判断 -0 不等于 +0;
// 用于判断一个对象是否等于另一个对象 是不是本身 NaN除外 +0 -0 除外

// 5 Object.assign()

// 1它是用来 合并对象 它的一个参数 是要合并到的目标对象 第二个参数 和以后的参数 是被合并的对象。
// 2它是浅拷贝的
// 3它是同名属性覆盖的

// 6 Object.getOwnPropertyDescriptor

// 这个方法 是用来查看对象的某个属性 的描述信息的 比如 是否 可枚举 可配置 可写 
// 它的第一个参数 是你要查看的对象 第二个是你要查看的属性

// 7 super 关键字

let father = { // 爸爸
    name:'zhangsan'
}

let son = { // 儿子
    getFatherName(){ 
        console.log(super.name); // 获取定义时的对象的原型对象
    }
}

Object.setPrototypeOf(son,father); // 让爸爸是爸爸 让儿子是儿子 (让son的原型是father)

son.getFatherName(); // 调用儿子的方法

// 8 扩展运算符 ...

// 可以用于 对象解构赋值的时候 接收未完全解构时 剩下的属性

let {a} = {a:'a',b:'b',c:'c'}; // b  和 c 属性被漏掉了 ，但是 我只想解构出a 但是又不想漏掉b&c


// 怎么办
let {a,...z} = {a:'a',b:'b',c:'c'}; //这就完美解决这个问题了

// 9 null传导运算符(提案)
//安全的访问属性

//const firstName = message?.body?.user?.firstName  //安全
//const lastName = message.body.user.lastName //不安全



