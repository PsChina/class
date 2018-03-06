
angular.module('随机数模块',[]) //我这名字是不合法的 你们千万不要用我这是为了方便教学人家取得名字都叫 ui.route ngRoute 我取的名字就叫 随机数模块 哈哈哈
        .factory('getRondom', [function() { // 自定义服务 工厂函数

            return function(min,max,type) { // 获取一些信息来生成随机数

                type = type ? type : 'integer'; // type 默认参数 integer
                min = min ? Number(min) : 0; // type 默认参数 0
                max = max ? Number(max) : 1; // type 默认参数 1

                if( min > max){
                    throw new Error( 'Min should be smaller than Max.' )
                }

                var number = 0;

                if(type === 'integer') {
                    min = parseInt(min);
                    max = parseInt(max);

                    number = min + Math.floor(Math.random()*(max-min+1));

                } else if( type === 'real'){
                    min = parseFloat(min);
                    max = parseFloat(max);    
                 
                    number = min + Math.random()*(max-min);
                }

                return number;
            }

        }])