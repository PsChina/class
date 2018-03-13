// 属性的简写

const name = 'zhangsan';
const age = 18;

const people = { 
    name:name,
    age:age
 }

 // es6简写

 const person = {
     name, // :name
     age, // :age
 }


// 方法的简写

// es5 

var obj = {
    name:'wangwu',
    getName:function(){
        return this.name;
    }
}

// es6 方法的简写

let object = {
    name:'zhaoliu',
    getName(){ // 少写了 function 还有 : 方便阅读
        return this.name;
    }
}

// 属性名表达式

// 在es5 语法我们的变量名只能是写死的 不能是动态的 比如

var obj = {
    "attri-name":'value',
    age:18
}

// 以上的 key 都是写死的

// se6 能提供活动的 key名

const nameArr = ['key1','key2','key3'];

let key = nameArr[Math.floor(Math.random()*nameArr.length)];

let people = {
    [key]:'value' // 这个 key 有可能是 key1 , key2 , key3
}



// Object.is()

Object.is(0,-0) // 不相等 false
Object.is(NaN,NaN) // 相等 同一个对象 true


// Object.assign() // 合并对象 是浅拷贝的
// 要实现深拷贝请自己递归

function isObject (val){
    typeof val === 'object'
}

let person = {
    
}

let name = {
    name:'lisi'
}

let age = {
    age:18
}

let like = {
    like:'eat'
}

Object.assign(person,name,age,like)
// 第一个参数 是容器  以后的参数是要被合并的 可以传递任意个



// 获取 属性的描述信息

let obj = {
    foo:'123'
}

Object.getOwnPropertyDescriptor(obj,'foo')

/*
configurable:true // 可配置
enumerable:true // 可枚举
value:"123" // 值
writable:true // 可写
*/


// super 关键字  (老爸)

let father = {
    name:'老爹',
    getName(){
        return this.name;
    }
}

let son = {
    name:'儿子',
    getFatherName(){
        return super.name // super 指向原型
    }
}

// 建立父子关系

Object.setPrototypeOf(son,father) // sun.prototype = father;

son.getFatherName() // 老爹


// 扩展运算符

let { a , b , ...other }  =  { a:'a',b:'b',c:'c',d:'d',e:'e' };

other

/**
{
    c:'c',
    d:'d',
    e:'e'
}
*/


var obj = {  // 我这个是写死的 但是 万一这个东西是动态的呢 
    name:'zhangsan',
    job:'XXX'
}


obj.job.something.haha; // 报错

// se5 语法解决报错

if( obj['job'] ){
    var temp = obj['job']
    if(temp['something']){
        temp = temp['something'];
        if(temp['haha']){
            return temp['haha']
        }
    }
}


// es6 语法解决报错
obj?.job?.something?.haha; // 不报错