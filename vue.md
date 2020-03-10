<!-- https://juejin.im/post/5d59f2a451882549be53b170 -->
#### keep-alive
+ vue的内部组件，可以缓存组件的状态，不被重新渲染。
+ 有两个方法actived和deactived，当进入keep-alive会触发actived方法，组件被激活。离开时触发deactived
+ 有两个属性include和exclude, include标记的组件名称可以被保存状态，exclude除了这些不保存状态

#### 组件通信方式
+ 父 > 子 props ----- 子 > 父 $emit
+ ref 与 $parent / $children 适用 父子组件通信
  1. ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
  2. $parent / $children：访问父 / 子实例
+ 组件之间vuex
+ EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信
+ attrs/ listeners
+ provide/inject
#### vue生命周期
##### 创建期间
+ beforeCreate 实例在内存中刚被创建，此时data和method还未初始化
+ created 实例在内存中创建好，可以调用data和method，但是dom还没有生成，但是还没有模板编译，$el此时不可用
+ beforeMount 再挂载前调用，此时可以获取dom,但是页面上的mustache表达式没有被替换。 
+ mounted  页面渲染完毕

#### 运行期间
+ beforeUpdate 数据改变之前调用的回调函数，此时data是最新的但是dom不是最新的
+ updated 组件更新之后

#### 销毁期间
+ beforeDestory 组件销毁前调用，实例还是完全可用
+ destoryed 组件销毁后调用

#### Vue 的父组件和子组件生命周期钩子函数执行顺序？
+ 加载渲染过程
  + 父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted 

+ 子组件更新过程
  + 父beforeUpdate -> 子beforeUpdate -> 子updated -> 父updated

+ 父组件更新过程
  + 父beforeUpdate ->  父updated

+ 销毁过程
  + 父beforeDestory -> 子beforeDestory -> 子destoryed -> 父destoryed 

#### 父组件可以监听到子组件的生命周期吗？
+ 比如有父组件 Parent 和子组件 Child，如果父组件监听到子组件挂载 mounted 就做一些逻辑处理
`

        // Parent.vue
        <Child @mounted="doSomething"/>
            
        // Child.vue
        mounted() {
            this.$emit("mounted");
        }
`
+ 以上需要手动通过 $emit 触发父组件的事件，更简单的方式可以在父组件引用子组件时通过 @hook 来监听即可，
`

        //  Parent.vue
        <Child @hook:mounted="doSomething" ></Child>

        doSomething() {
        console.log('父组件监听到 mounted 钩子函数 ...');
        },
            
        //  Child.vue
        mounted(){
        console.log('子组件触发 mounted 钩子函数 ...');
        },    
            
        // 以上输出顺序为：
        // 子组件触发 mounted 钩子函数 ...
        // 父组件监听到 mounted 钩子函数 ...   

`

#### 组件中 data 为什么是一个函数？
+ 因为组件是用来复用的，js里对象是引用关系，如果组件data是一个对象，那么作用域就没有隔离，子组件的data属性值就会相互影响。另外new Vue的实例只有一个，不会被复用，因此就不会存在引用对象的问题。

#### computed 和 watch 的区别和运用的场景？
+ computed:计算属性，依赖其他属性值，并且它的值有缓存，只有它依赖的属性值发生改变，下一次获取computed的值时才会重新计算。

+ watch: 观察的作用，类似于数据的监听回调，每当监听的数据发生改变时就会执行回调执行后续操作。

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
+ v-once 只渲染组件或者元素一次，后面就不会渲染了
+ v-cloak

#### vue为何不能监听数组的改变
this.$set(obj, attr, value);
this.splice(index, 1, newValue)

#### Vue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？
+ 如果目标是数组，直接使用数组的 splice 方法触发相应式；
+ 目标是对象，先判断属性是否存在，如果存在直接赋值，否在通过object.defineProperty来劫持。

#### Vue 框架怎么实现对象和数组的监听？
+ Object.defineProperty() 只能对属性进行数据劫持，不能对整个对象和数组进行劫持。
+ 解决方案： 遍历数组 和递归遍历对象，

#### Proxy 与 Object.defineProperty 优劣对比
+ Proxy
    + 可以直接监听对象
    + 可以监听数组的变化
    + 返回的是一个新对象，我们只操作新的对象就能达到目的，而obj.define只能遍历对象属性直接修改
    + 兼容性不是很好

+ Object.defineProperty
  + 兼容性好，支持ie9

#### MVVM是什么?
+ MVVM是一个软件架构设计模式
+ view层 视图层，也就是用户界面。
+ model层 值得是各种业务逻辑处理和数据操控，对于前端来说就是后端提供的api接口
+ viewmodel层
  vm是v和m的调度者。view和vm之间双向数据绑定，vm的内容变化会实时展现在view

#### key为什么不能用index？                              
+ 比如说一个数组渲染至页面上，通过index绑定key。此时我要在其中插入一个元素。那么处于这个未知的元素的index 就给了新插入的这个元素，然后处于这个新增元素后面的index就会更新。对性能造成了影响。

#### Vue 中的 key 有什么作用？
+ key是vue中vnode的唯一标记，通过这个key，diff操作可以更准确，更快速

#### 虚拟dom？
+ 保证性能下线
+ 无需手动操作dom

#### 虚拟 DOM 实现原理？
+ 用js 对象模拟真实 DOM 树，对真实 DOM 进行抽象；
+ diff 算法 — 比较两棵虚拟 DOM 树的差异
+ pach 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。

#### diff算法
#### 双向绑定原理
+ 监听器Observe：主要是对数据对象进行遍历，包括子属性对象的属性。主要通过Object.defineProperty() 对属性加上setter，和getters。
+ 编译器Compile：解析差值表达式，将差值表达式的变量都替换成数据，然后初始化渲染页面，并对差值表达式对应的节点绑定更新函数。添加监听数据的订阅者，一旦数据发生改变，收到通知，立即调用更新函数进行数据渲染。
+ 订阅者watcher：为Observer和compile之间通信的桥梁，主要是订阅Observer中的属性变化的消息。当属性变化时会触发Dep的notify方法。然后Wacter的update方法会触发compile对应的更新函数。
+ 订阅器Dep：采用发布订阅模式，用来收集watcher。对象的每个属性对应一个dep的实例

#### 发布订阅？

#### slot
1. 在组件内插入一个slot标签，当调用组件时在可以在组件标签中插入内容。
2. 如果默认slot中存在内容，组件标签中插入的内容会替换默认的内容。否在显示默认的内容
3. 具名插槽，调用的时候可以在html标签 上增加 slot=“a”， slot name = “a”

#### $nextTick
+ 在下一次dom更新后调用的函数，在修改数据后立即调用这个回调函数，获取更新后的dom

#### 你有对 Vue 项目进行哪些优化？
+ 代码层面的优化
  + v-if和v-show区分场景使用
  + computed和watch分场景使用
  + v-for遍历必须为item添加key，避免同时使用v-if
  + 路由懒加载
  + 第三方插件按需引入
  + 图片资源懒加载

### vue 首屏加载优化
  1. 把不常用的库放到index.html里，采用cdn方式引入
  2. 路由懒加载
  3. 不生成map文件
  4. 组件尽量不要全局引入
  5. 服务端渲染

### 单向数据流
  + 父组件是通过prop把数据传给子组件的，但是子组件不能修改这个值，不然的话会报错。子组件想要修改时，只能通过$emit派发一个事件来修改。
 

### v-model
`

        <input v-model="number">
        // 相当于
        <input :value="number" @input="$event.target.value">
`