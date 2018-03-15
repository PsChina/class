export default function(Vue){
    new Vue({
        el:'#app',
        data(){
            return {
                msg:'Hello',
                flag:true
            }
        },
        methods:{
            left(){
                console.log('向左滑动')
            },
            right(){
                console.log('向右滑动')
            },
            up(){
                console.log('向上滑动')
            },
            down(){
                console.log('向下滑动')
            },
            changeMsg(){
                this.msg = 'msg has changed!'
            }
        },
        created(){
            // this.$http({
            //     url:'http://localhost:8080/getData',
            //     method:'GET'
            // })
            // .then((result)=>{
            //     this.msg=result.data;
            // },(error)=>{
            //     throw error;
            // })
            this.$http.get('/getData')
            .then((result)=>{
                this.msg=result.data;
            })
        }
    })
}

