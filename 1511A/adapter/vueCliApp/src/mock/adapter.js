import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/test').reply(200,{
    data:'哈哈哈测试成功'
})


const dataBase = {
    '0':['数据1'],
    '1':['数据2'],
    '2':['数据3'],
    '3':['数据4']
}

mock.onPost('/test').reply((config)=>{
    console.log(config)
    const data = JSON.parse(config.data);
    if(dataBase[data.params.id]){
        return [200,dataBase[data.params.id]]
    }else{
        return [404,{msg:'Data not found.'}]
    }
})

