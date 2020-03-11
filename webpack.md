#### webpack优化配置
#### webpack与grunt、gulp的不同？
+ webpack 前端模块化打包工具，可以递归打包项目中的所有模块，最终生成几个打包后的文件。
+ gulp 

#### 什么是entry`output
+ entry告诉webpack要使用哪个模块作为构建项目的起点，默认当前src中的index.js
+ output打包后输出的文件夹

#### 有哪些常见的Loader？他们是解决什么问题的？
1. babel-loader： es6转es5
2. css-loader：加载css支持模块化、压缩、文件导入等
3. image-loader：加载并且压缩图片文件
4. eslint-loader：通过 ESLint 检查 JavaScript 代码

#### 有哪些常见的Plugin？他们是解决什么问题的？
1. commons-chunk-plugin：提取公共代码
2. uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码
3. html-webpack-plugin： 压缩html

#### Loader和Plugin的不同？
+ loader 让 webpack 能够去处理那些非 JavaScript 文件

#### webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全
1. 从entry里配置的moudle开始递归解析entry依赖的所有module
2. 每找到一个module，就会根据配置的loader去找对应的转换规则
3. 对module进行转换后，在解析当前module依赖的module
4. 这些模块会以单位分组，一个entry和其所有依赖的module会被分到一个组chunk
5. 最后webpack会把所有chunk转换文件输出
6. 在整个流程中webpack会在恰当的世纪执行plugin里定义的逻辑

#### webpack的热更新是如何做到的？说明其原理？
#### 如何利用webpack来优化前端性能？（提高性能和体验）
+ 压缩代码。删除多余的代码、注释、简化代码的写法等等方式。可以利用webpack的UglifyJsPlugin和ParallelUglifyPlugin来压缩JS文件， 利用cssnano（css-loader?minimize）来压缩css

#### 如何在vue项目中实现按需加载？

#### bundle，chunk，module？
+ bundle是webpack打包出来的文件
+ chunk是进行模块依赖分析的时候，代码分割出来的代码块。
+ 开发中的单个模块
