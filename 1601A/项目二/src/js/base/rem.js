/** jsDoc
 * @param {*} value 是一个系数 使得屏幕宽度除以value能等于100
 */

function rem(value){
    document.documentElement.style.fontSize = window.screen.width / value + 'px';
    window.onresize = function(){
        document.documentElement.style.fontSize = window.screen.width / value + 'px';
    }
}