import './src/css/style.css';
import Vue from 'vue';
import axios from 'axios'; //网络请求的包
import './index.html';
Vue.prototype.axios = axios; // 将网络请求对象挂载在Vue 上 使得它具有 网络请求的能力


new Vue({
    el:'#app',
    data(){
        return {
            data:[],
            currentList:[],
            currentType:''
        }
    },
    methods:{
        select(item){ // select 事件
            this.currentList = item.main;
            this.currentType = item.type;
        }
    },
    created(){
        this.axios({
            url:'http://localhost:8080/mock/test',
            method:'GET'
        })
        .then((result)=>{
            this.data = result.data
        },(error)=>{
            throw new Error(error);
        })
    }
})