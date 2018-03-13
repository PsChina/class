<template>
  <div id="app">
    <HelloWorld/>
    <item></item>
    <globalItem/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld' // 单文件组件
const item = { // 局部组件
    // template:` <div>局部组件</div> `,
    props:{
        event:{
            default:'click',
            type:String
        }
    },
    render(createElement){  // render 函数
        // 渲染 虚拟dom 的函数

        const tagName = 'div';
        const vNode =  { 
                on:{ 
                    [this.event]:this.fn 
                    },
                domProps:{ 
                    // innerHTML:'<p>我的第一个虚拟dom</p>' 
                    } 
                }
        const childrens = [ 
            '先写一些文字',
            createElement('h1', '一则头条'),
            createElement('div',{ domProps:{ innerText:'子元素3' } })
            ];
        return createElement( tagName, vNode, childrens);
    },
    methods:{
        fn(){
            console.log('点击了')
        }
    }
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    item
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
