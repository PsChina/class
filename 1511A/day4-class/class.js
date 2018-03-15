// class Div{
//     constructor(innerText){
//         this[0] = this.$el = document.createElement('div');
//         this.$el.innerText = innerText;
//     }
// }

// class Button extends Div{
//     constructor(){
//         super();
//     }
// }

const MyClass = (function(){
    var provide = Symbol();
    var provideAttr = Symbol();

    class MyClass{
        constructor(value){
            console.log('初始化')
            // this.name = 'default'
            this[provideAttr] = value;
        }
        public(){
            console.log('公有方法')
            console.log( this[provideAttr] );
        }
        [provide](){
            console.log('私有方法')
        }
        api(){
            this[provide]()
        }
        set name(name){ // setter 器
            console.log('设置名字')
            if(name!=this._name){
                this._name = name;
            }
        }
        get name(){ // getter 器
            console.log('获取名字')
            return this._name;
        }
    }

    return MyClass;
})()

