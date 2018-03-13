<template>
  <div>
      <h1>home</h1>
        <component-a></component-a>
        <component-b></component-b>
        <!-- 组件和 组件b 几乎同事渲染完成 因为他们在同一个页面 而且挨在一起 -->
  </div>
</template>

<script>

const a = { // 在单文件组件内 定义局部组件
    data(){
        return {
            msg:null
        }
    },
    methods:{ // send 是一个普通的函数 它在 touchend 的时候被触发
        send(){ // send 方法触发的时间一定在 a 组件渲染完成之后
            console.log(`将${this.msg}发送给B组件`)
            // 利用 bus 通讯 
            // bus 是一个 vue 实例 
            // 每个vue的实例 都实现了 $emit $on 方法 所以我们可以新建一个空vue实例 来做通讯
            
            //bus.$emit( 'msg', this.msg ) // 发送自定义bus事件 
            const eventName = 'msg';
            const value = this.msg;
            this.bus.$emit( eventName, value ) // 发送数据 
        }
    },
    template:`
        <div> 
        子组件A 
        <input v-model="msg" />
        <button @touchend="send()">发送消息</button>
        </div>
    `
}
const b = { 
    data(){
        return {
            value:null
        }
    },
    template:`
        <div> 
        子组件B 
        <div v-text="value"></div>
        <!-- 显示数据 -->
        </div>
    `,
    created(){ // 组件B创建完成 但还未挂载 可以在这里监听 msg 事件 来更新组件b中的value
        this.bus.$on('msg',(newVal)=>{ //绑定this 指向
            // 通过监听msg 获得数据
            this.value = newVal // 将数据 赋值给 data 下的value
        })
    }
}


export default { // home 页vue实例
    components:{ // 将 a , b 注册在 home 中
        componentA:a, // a 含有a 连接 所以我们不写  a,b  写的是 componentA:a,componentB:b
        componentB:b
    }
}
</script>

<style>

</style>
