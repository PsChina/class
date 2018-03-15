function loadImageAsync(url){ // 单张图片

    const image = new Image(); // document.createElement('img');

    const promise = new Promise(function( resolve , reject ){

        image.onload = function(){
            resolve( image );
        }

        image.onerror = function(error){
            reject( error );
        }

    })


    image.src = url;

    return promise;

}


function loadImagesAsync(...urls){ // 接收 一个图片集合
    
   const urlArr =  urls[0] instanceof Array ? urls[0] : urls ; // 转为数组

   const [sum,imageArr] = [urlArr.length,[]]; // 新建你需要返回的 对象 以及 返回条件

   const promise = new Promise( (resolve,reject)=>{

            for( let url of urlArr ){

                loadImageAsync(url).then((image)=>{ //一张 一张的 装载

                    imageArr.push(image); // 没成功一张 就push 一张

                    if(imageArr.length === sum){ // 直到所有的都加载完毕

                        resolve(imageArr); // 全部成功以后 返回成功的状态和 数据

                    }

                },(error)=>{ //当图片加载出错时 调用
                    
                    reject(error); // 一旦有任何一张图片错误 抛出错误 并且宣布失败
                })

        }

   } )

   return promise;

}

