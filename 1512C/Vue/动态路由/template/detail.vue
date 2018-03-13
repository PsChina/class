<template>
    <div :style="{background:detail.color}">
        <!-- 一个 商品详情的模版 显示N多个同类商品-->
        <h1>商品{{ $route.params.id }}详情</h1>  
        <h3 v-text="detail.name"></h3>
        <div>price: <span v-text="detail.price"></span></div>
        <div>size: <span> <span v-text="detail.size[0]"></span>×<span v-text="detail.size[1]"></span> </span></div>
    </div>
</template>

<script>
// .vue 文件需要 vue-loader style-loader css-loader vue-template-compiler
const baseUrl = 'http://localhost:8080/mock';
export default {
    data(){
        return {
            detail:{
                size:[]
            }
        }
    },
    watch:{
        $route(newVal){
            console.log(newVal.params.id) // 重新发送网络请求
            this.axios({
                url:baseUrl+'/list',
                method:'POST',
                data:{
                    id:this.$route.params.id
                }
            }).then((result)=>{
                 this.detail = result.data;
            },(error)=>{

            })
        }
    },
    created(){ // 实例被创建就能拿到 路由 和 参数
        this.axios({
            url:baseUrl+'/list',
            method:'POST',
            data:{
                id:this.$route.params.id
            }
        })
        .then((result)=>{
            this.detail = result.data;
        },(error)=>{

        })
    }
}


Vue.component('routeLink',{
    props:{
        activeClass:{
            type:String,
            default:'router-link-active'
        }
    }
})

</script>

<style>

</style>

