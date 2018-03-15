const ArrayLike = (function(){
    const array = Symbol();
    const index = Symbol();
    class ArrayLike{ //伪数组
        static fromArray(array){ // 把数组转成伪数组
           return new ArrayLike(...array)
        }
        constructor(...args){
            this[array] = args;
            this[index] = 0;
            this.length = args.length;
            Object.defineProperty(this,'length',{
                enumerable:false
            })
            for( let value of args ){
                this[this[index]++] = value;
            }
        }
        *[Symbol.iterator](){ // 让一个对象具有 iterator 接口 //Symbol.iterator 是固定写法
            for(let value of this[array]){
                yield value;
            }
        }
        push(value){
            this[this[index]++] = value;
            this.length++;
            this[array].push(value);
            this[Symbol.iterator]();
            return this.length;
        }
    }
    return ArrayLike;
})()


// 定一个只能用new 调用的 构造函数
function Point(x,y){
    if( new.target !== undefined ){
        this.x = x;
        this.y = y;
    } else {
        throw new Error('Must use the new keyword call!')
    }

}