// 私有方法 和属性

// 就是 只能在 类 内部使用的 方法和属性。


class Person{
    constructor(name){
        this.name = name; // 公有属性
        this.money = 0; // 公有属性
    }
    buySomeThing(){ // 公有方法
        console.log(this.money)
        this.money--;
        console.log('花钱',this.money)
    }
}

const zhangsan = new Person('张三');

window.shopping = zhangsan.buySomeThing;  // 把花钱的方法 赋值给了 window  

shopping.call(zhangsan) // 让后让 window 来花钱 不过 仍然是 用张三的身份来花钱   这不是张三发起的动作



const People = (function(){
    const money = Symbol() // 唯一的值 在这个作用域内有效 这个作用域外面能 存在一个 和money一样的值吗？ 不能
    const useMoney = Symbol()
    class People{
        constructor(name){
            this.name = name // 公有属性
            this[money] = 1000 // 私有属性 money
        }
        [useMoney](){ // 私有方法
            console.log('用钱')
            this[money]--;
        }
        unhappy(){ // 公有方法
            this[useMoney](); // 私有方法 只能在类的内部使用  通过它自己的公有方法 来调用私有方法
        }
        seeMoney(){ // 只能看
            return this[money]
        }
        getMoney(mon){  // bug 就是说 你的  const money = Symbol()   money被覆盖了
            this[money] = this[money] + mon;
        }
    }
    return People;
})()

// this.money => this._money 这样也是私有的 但是 它不是严格意义上的私有 外部也能访问到