/**
 * Rem函数,设置响应式布局.
 * @param {number} value - 设备屏幕宽度.
 */
export default function(value) {
    document.documentElement.style.fontSize =
    window.screen.width / value + 'px';

    window.onresize = function() {
        document.documentElement.style.fontSize =
        window.screen.width / value + 'px';
    };
}
