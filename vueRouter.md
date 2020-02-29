### 导航守卫
1. 用途：主要用来通过跳转或取消的方式守卫导航
2. 注意：参数或者查询的改变 并不会触发 进入or离开导航守卫
3. 解决方案： 

`

        watch: {
            $route(to, from) {

            }
        },
        beforeRouteUpdate(to, from, next)

`

#### 全局前置守卫（beforeEach）

`

    const router = new VueRouter({ ... })

    router.beforeEach((to, from, next) => {
    // ...
    })
    to: Route: 即将要进入的目标 路由对象
    from: Route: 当前导航正要离开的路由
    next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

`


#### 全局解析守卫(beforeResolve)
1. router.beforeResolve 注册一个全局守卫。这和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后


#### 全局后置钩子(afterEach)
`
  
    router.afterEach((to, from) => {
        // ...
    })

`


#### 路由独享的守卫(beforeEnter)

`

    const router = new VueRouter({
        routes: [
            {
            path: '/foo',
            component: Foo,
                beforeEnter: (to, from, next) => {
                    // ...
                }
            }
        ]
    })
`

#### 组件内的守卫
`

    const Foo = {
        template: `...`,
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
        },
        beforeRouteUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
        }
    }

`


#### 完整的导航解析流程
1. 导航被触发
2. 在失活的组件里调用离开守卫
3. 调用全局的beforeEach
4. 再重复的组件里调用beforeRouteUpdate
5. 在路由配置里调用beforeEnter
6. 解析异步路由组件
7. 再被激活的组件里调用beforRonteEnter
8. 调用全局的beforeResolve
9. 导航被确认
10. 调用全局的afterEach钩子
11. 触发DOM更新
12. 用创建好的实例调用beforeRouteEnter守卫中传给next的回调函数


#### 路由懒加载
`
    
    consot uper = () => import('./aaa)

`
