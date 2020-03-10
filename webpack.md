#### webpack优化配置
#### webpack与grunt、gulp的不同？
+ webpack 前端模块化打包工具
+ gulp 
#### 有哪些常见的Loader？他们是解决什么问题的？
1. babel-loader： es6转es5
2. css-loader：加载css支持模块化、压缩、文件导入等
3. image-loader：加载并且压缩图片文件
4. eslint-loader：通过 ESLint 检查 JavaScript 代码

#### 有哪些常见的Plugin？他们是解决什么问题的？
1. commons-chunk-plugin：提取公共代码
2. uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码

#### Loader和Plugin的不同？
+ loader 让 webpack 能够去处理那些非 JavaScript 文件

#### webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全
#### webpack的热更新是如何做到的？说明其原理？
#### 如何利用webpack来优化前端性能？（提高性能和体验）
+ 压缩代码。删除多余的代码、注释、简化代码的写法等等方式。可以利用webpack的UglifyJsPlugin和ParallelUglifyPlugin来压缩JS文件， 利用cssnano（css-loader?minimize）来压缩css

#### 如何在vue项目中实现按需加载？
