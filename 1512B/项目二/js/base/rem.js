/**
 * @param {number} value 设置分辨率时的除数
 */
function rem(value) {
    document.documentElement.style.fontSize =
    window.screen.width / value + 'px'

    window.onresize = function() {
        document.documentElement.style.fontSize =
        window.screen.width / value + 'px'
    }
}
