console.log('入口一');

const a = 10; // bable在做的事  => var a = 10;   es6 => es5

class Point{  // es6的语法更好理解
    constructor(x,y){ // 构造器
        this.x = x;
        this.y = y;
    }
    toString(){ // 将一个点 转换成字符串
        return `(${this.x},${this.y})`;
    }
}

