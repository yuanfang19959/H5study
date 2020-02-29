
#### keep-alive
+ vue的内部组件，可以缓存组件的状态，不被重新渲染。需要配合路由一起使用
+ 有两个方法actived和deactived，当进入keep-alive会触发actived方法，组件被激活。离开时触发deactived
+ 有两个属性include和exclude, include标记的路由可以被保存状态，exclude除了这些不保存状态

#### 组件通信方式
+ 父 > 子 props
+ 子 > 父 emit
+ 组件之间 

#### diff算法
#### 为什么key最好不要是index
#### vue为何不能监听数组的改变
#### 虚拟dom
#### MVVM是什么?
#### 双向绑定原理
#### 常见的v-指令
+ v-if
+ v-else-if
+ v-else
+ v-for
+ v-bind
+ v-on
+ v-show
+ v-text
+ v-html
+ v-once

#### slot
#### $nextTick
