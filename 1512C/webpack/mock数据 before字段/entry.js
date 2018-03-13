import axios from 'axios';
import { resolve } from 'url';

// console.log(axios);
axios({
    url:'http://localhost:8080/mock/ceshi?id=001',
    method:'GET'
}).then( (result)=>{
    console.log( result.data );
} , (error)=>{
    throw new Error(error)
} )

axios({
    url:'http://localhost:8080/mock/login',
    method:'POST',
    data:{
        username:'zhangsan',
        password:123456
    }
}).then( (result)=>{
    console.log( result.data )
},(error)=>{
    throw new Error(error);
} )

//用 axios 请求数据