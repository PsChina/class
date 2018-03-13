<template>
  <div>
      <div v-for=" value in list " v-text="value" :key="value">

      </div>

      <label for=""> 帐号: <input type="text" v-model="account"> </label>
      <br>
      <label for=""> 密码: <input type="password" v-model="password"> </label>
      <br>
      <button @touchend="submit">登录</button>

      <div v-if="loginState===1" :style="{ color:'green' }">登陆成功</div>
      <div v-else-if="loginState===0" :style="{ color:'red' }">密码错误</div>
      <div v-else-if="loginState===-1" :style="{ color:'orange' }">用户不存在</div>
      <div v-else>登录信息</div>
  </div>
</template>

<script>
export default {
  data(){
      return {
          list:[], // 空数组
          // 新增几个变量 2
          account:null,
          password:null,
          loginState:null
      }
  },
  methods:{ // 1
    submit(){ // 提交登录信息
        console.log( this.account , this.password );
        this.axios({
            url:'http://localhost:8080/mock/login', //路径错误
            method:'POST',
            data:{
                account:this.account, // 传递帐号
                password:this.password // 传递密码
            }
        })
        .then((result)=>{ // 成功的回调
            this.loginState = result.data.state
            console.log( this.loginState )
        },(error)=>{ // 失败的回调
            throw new Error( error )
        })
    }
  },
  created(){ // 组件被创建    找到任意一个组件 的created 函数 请求数据

    this.axios({
        url:'http://localhost:8080/mock/test',
        method:'GET'
    })
    .then( (result)=>{ // 请求成功
        console.log( result.data );
        this.list = result.data.list // 使得空数组不为空
    },(error)=>{ // 请求失败
        throw new Error( error )
    } ) 

  }
}
</script>

<style>

</style>
