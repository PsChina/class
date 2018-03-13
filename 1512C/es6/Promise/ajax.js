function ajax(obj){

    function formatData(data){
        let str = '';
        for(let i in data ){
            if( typeof data[i] !== 'object' ){
                str += i+ '=' + data[i] + '&'
            } else {
                str += i+ '=' + formatData(data[i]) + '&'
            }
        }
        str = str.substring(0,str.length-1)
    }

    const httpRequest = new XMLHttpRequest();
    httpRequest.open(obj['method'],obj.url)

    const promise = new Promise(function(resolve,reject){ // 进行中 pending

        httpRequest.onreadystatechange = function(){
            if(this.readyState !==4){
                return
            }
            // this.readyState === 4
            if( this.status === 200 ){ // 成功
                if(obj['success']){
                    obj['success'](JSON.parse(this.response))
                }
                resolve( JSON.parse(this.response) );
                // 已成功 fulfilled
    
            } else { // 失败
                if( obj['error'] ){
                     obj['error'](JSON.parse(this.response))
                }
                reject(this.responseText);
                // 已失败 rejected
    
            }
        }       

    })

    httpRequest.send( formatData(obj['data']));

    return promise;  // 将 promise 返回 以便调用then 
}

