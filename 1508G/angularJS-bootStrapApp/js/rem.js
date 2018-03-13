function rem(value){
    document.documentElement.style.fontSize = window.screen.width/value + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width/value + 'px';
    }
}
// 1366/13.66
// rem(13.66)