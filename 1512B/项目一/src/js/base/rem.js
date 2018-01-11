(function(val){
    document.documentElement.style.fontSize = window.screen.width / val + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width / val + 'px';
    }
})(13.66)