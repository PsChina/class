<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <other><div>12345676543</div></other>
    <item> <div slot="A">123</div> <div slot="B">789</div> </item>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

const other = {
    template:'<div>测试</div>'
}

const item = {
    template:'<div> <slot name="A"></slot> 456 <slot name="B"></slot></div>'
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    item,
    other
  },
  created(){
      this.axios.get('/test',{params:{id:'001'}}).then( (result)=>{
          console.log( result.data );
      } , (error)=>{
          throw error;
      } ) 
      this.axios.post('/test',{params:{id:3}}).then((result)=>{
          console.log(result.data)
      },(error)=>{
          throw error;
      })  
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
