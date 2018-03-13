import * as obj from './module2.js';

console.log(obj);

// 把 模块二所有的 东西 都拿到 obj里去了


// 总结

// export 抛出一个 对象或者函数

// export default // 默认抛出的内容

// export * from 'XXX' // 继承某个模块

// import XXX from 'XXX' // 获取 XXX模块 expoet default 的内容

// import * as obj from './module2.js'; // 将 模块二内 所有的东西 拿过来放在obj 里

// import { XXX } from 'XXX' // 把某个模块的 某个属性/方法 拿过来用