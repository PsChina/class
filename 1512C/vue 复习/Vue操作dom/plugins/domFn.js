var domFn = {
    install:function(Vue,options){  
        var getStyle;
        
        if(Window.getComputedStyle||getComputedStyle){
            getStyle = function(ele,attr){
                return getComputedStyle(ele)[attr];
            }
        }else {
            getStyle = function(ele,attr){
                return ele.currentStyle[attr];
            }
        }  
        Vue.prototype.getStyle = getStyle;
    }
}