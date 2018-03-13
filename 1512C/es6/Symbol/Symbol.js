//  string
//  number
//  boolean
//  object
//  null
//  undefined

// 我们已经学了六种数据类型


//在es6 中 我们将学习到 第7种数据类型

Symbol // 这种数据类型 永远不会重复

//永远不会重复 永远都是 独一无二的。

// 只有它自己能等于它自己

// 新建一个 Symbol 类型的 变量
let symbol  = Symbol();


//不能与其他数据类型进行计算

symbol = symbol + 1; // 报错 Symbol 不能与其他数据类型进行计算

// Cannot convert a Symbol value to a number   不能将一个Symbol类型的值 转换成 数字

