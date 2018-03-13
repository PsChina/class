<template>
  <div>
      路由页面1 {{ data }}
  </div>
</template>

<script>

export default {
    data(){
        return {
            data:''
        }
    },
    created(){
        this.axios({
            url:'http://localhost:8080/mock/test'
        })
        .then((result)=>{
            this.data = result.data;
        },(error)=>{
            throw new Error(error);
        })
    }
}
</script>

<style>

</style>
