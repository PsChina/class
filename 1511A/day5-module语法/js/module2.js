export * from './module1';  // 忽略 模块一的 default (模块的继承 模块二继承 模块一)
export const moduleName = '模块2';
export function getName(){
    return moduleName;
}
export default {
    fn(){
        console.log('模块二fn函数')
    }
}