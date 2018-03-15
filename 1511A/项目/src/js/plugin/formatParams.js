/**
 * @param {function} Vue -Vue构造函数
 */
export default {
    install: (Vue, options)=>{
        /**
         * @return {string} -返回一个表单数据
         * @param {object} obj -网络请求需要传递的json数据
         */
        function formatfn(obj) {
            let str = '';
            for (let key in obj) {
                if (typeof obj[key] !=='object') {
                    str += key+'='+ obj[key]+'&';
                } else {
                    formatfn(obj[key]);
                }
            }
            return str;
        }

        if (!Vue.prototype.format) {
            Vue.prototype.format = function(obj) {
                if (obj instanceof Object && !(obj instanceof Array) ) {
                    let str = formatfn(obj);
                    str = str.substring(0, str.length-1);
                    return str;
                } else {
                    throw new TypeError('Params must be an object!');
                }
            };
        } else {
            throw new Error('The attribute format early exist!');
        }
    },
};
