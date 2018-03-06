
function autoFixDigit(number){
    if( number < 10 ){
        number = '0'+number;
    }
    return number;
}

app.filter('formatTime',[function(){
    return function(input){
        // console.log( Math.round(input) );

    //    if(!input){ // 每次都会计算
    //        input = 0;
    //    }

        var second = autoFixDigit( Math.floor(input%60) ) // 除以60 的余数 就是秒

        var minute = autoFixDigit( Math.floor(input/60 ) % 60 ) // 取余60 因为 分钟 不能大于 60分钟

        var hours = autoFixDigit( Math.floor(input/3600) % 24 )  // 取余 24 不能超过 24 小时

        var output ;

        if( hours == 0 ){  // 它有可能是个字符串  在这里就能隐式转换
            output = `${minute}:${second}` 
        } else {
            output = `${hours}:${minute}:${second}`
        }

        return output;
    }
}])