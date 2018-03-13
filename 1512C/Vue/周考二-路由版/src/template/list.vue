<template>
  <!-- html -->
    <!-- 使用局部组件 -->
    <div>
         <item v-for=" item in  list" :src="item.src" :text="item.text"></item>
    </div>
   
</template>

<script>
// js 单文件组件
const item = { // 局部组件
    props:['src','text'],
    template:`
        <div>
        <img :src="src" />
        <p v-text="text"></p>
        </div>
    `
}

export default { // 抛出组件
    data(){
        return {
            list:[]
        }
    },
    created(){ // 被创建  在这里发送网络请求请求数据
        const baseUrl = `http://localhost:8080/mock/${this.$route.params.title}`
        this.axios({
            url:baseUrl
        })
        .then((result)=>{
            this.list = result.data;
        },(error)=>{
            throw new Error(error);
        })
    },
    components:{ // 注册局部组件
        item
    },
    watch:{
        $route(to,from){ // 更新路由时 发送网络请求
            const baseUrl = `http://localhost:8080/mock/${to.params.title}`
            this.axios({
                url:baseUrl
            })
            .then((result)=>{
                this.list = result.data;
            },(error)=>{
                throw new Error(error);
            })
        }
    }
}
</script>

<style>
/*css*/
    img{
      width: 100%;  
    }
</style>
