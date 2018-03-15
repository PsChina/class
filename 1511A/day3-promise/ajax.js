function ajax(obj){

    const httpRequest = new XMLHttpRequest();

    httpRequest.open( obj['method'] , obj['url'] );

    const promise = new Promise( function( resolve , reject ) {

        httpRequest.onreadystatechange = function() {

            if (this.readyState != 4) {
                return
            }
    
           if(this.status === 200) {
    
                resolve(JSON.parse(this.response))
    
           }else{

                reject(this.statusText)

           }
            
        }


    } )

    httpRequest.send( obj['data'] );

    return promise;

}