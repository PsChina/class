# babel-loader
使得webapack能识别 js面的 es6 语法 而不报错

# babel-core 
babel的实现核心功能的包 必须要的

# babel-preset-env
实现es6,7,8,9等等 转es5的
touch .babelrc

{
    "presets":["env"]
}


# babel-preset-stage-0
提案阶段的 es6 能够被编译
touch .babelrc

{
    "presets":["stage-0"]
}

# babel-preset-es2015
es6转es5的

touch .babelrc

{
    "presets":["es2015"]
}

# css-loader
使得 webpack能够正确的引入 css 并将它转换为js

# style-loader
使得js 形态的css 能生效

# url-loader
使得 html 、 css 中的 图片能够被打包 成base64的图片 使得他们成为了一个独立模块

# html-loader
使得 .html 结尾的文件 能够被 正确的 import 也就是被webpack 识别

