function loadImageAsync(url){ // 单张图片

    const image = new Image(); // document.createElement('img');

    const promise = new Promise(function( resolve , reject ){

        image.onload = function(){
            resolve( image );
        }

        image.onerror = function(error){
            reject( 'Can not load image at '+ url );
        }

    })


    image.src = url;

    return promise;

}



async function loadImagesAsync(...urls) {

    let urlArr = urls[0] instanceof Array ?  urls[0] : urls;
                                    
    let [sum,imageArr] = [urlArr.length,[]];


    for( let url of urlArr ){

        await loadImageAsync(url).then((image)=>{

            imageArr.push(image)

        },(error)=>{

            throw error;

        })

    }

    return imageArr;

}