function loadImageAsync(url) {

    const image = new Image();

    const promise = new Promise( function(resolve, reject) {

        image.onload = function () { // onload 加载完了
            resolve(image); // 由进行中变为 已成功
        }
        
        image.onerror = function () { // onerror 失败了
            reject( `Can not load image at ${url}` ); // 由进行中变为 已失败
        } 

    } )

    image.src = url;

    return promise; // 返回 promise 以便在外面 注册 成功和 失败的回调

}

async function loadImagesAsync(urlArr) { // 读取多张图片

        const imageArr = [];

        let err;

        for( let i = 0 ,length = urlArr.length ; i < length ; i++ ){
            await loadImageAsync(urlArr[i])// 读取单张图片
            .then( (image)=>{ // 单张图片成功
                imageArr.push(image)
            },(error)=>{ // 单张图片失败
                err = error ;
            } )             
        }

        const promise = new Promise((resolve, reject)=>{
            if(imageArr.length === urlArr.length){
                resolve( imageArr )
            }else{
                reject( err )
            }
        })

        return promise;

}