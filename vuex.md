### Vuex是什么？
#### 为vue开发的状态管理模式。
![vuex原理图](./assets/vuex.png)
+ state: 保存所有状态。一般通过mutations来更改。
+ getter: 相当于computed属性,可以返回处理过的数据。
`

        const store = new Vuex.Store({
            state: {
                todos: [
                    { id: 1, text: '...', done: true },
                    { id: 2, text: '...', done: false }
                ]
            },
            getters: {
                // 注意这边只能使用一个参数 只允许一个getters_another
                doneTodos: (state, getters_another) => {
                    return state.todos.filter(todo => todo.done)
                },
                // 或者只有一个state
                getters_another: state => {
                    return state.todos.filter(todo => todo.done)
                },
            }
        })

        // 组件内这样调用
        computed: {
            hasDone: function() {
                return this.$store.getters.doneTodos,
            },
            // 或者通过此方式映射之后，直接使用this.doneTodos
            ...mapGetters([
                // 这里起了别名
                doneTodos,
            ])
        }

`
+ mutations: 同步处理state，不能异步。
`

        mutations: {
            // 这边可以多传一个payload 可以是对象也可以是单个值
            increment (state, payload) {
                state.count += payload.amount
            },
        }
        
        // 调用
        this.$store.commit('increment', {name: 1, car: 2})
         methods: {
            ...mapMutations([
                // this.increment()
                'increment', 

                 // this.incrementBy(amount) to `this.$store.commit('incrementBy', amount)` 带一个参数
                'incrementBy' 
            ]),

            // 注意起别名的话 中间是对象
            ...mapMutations({
                 // this.add()
                 add: 'increment'
            })
        }
`
+ actions: 异步处理state
`

        const store = new Vuex.Store({
            state: {
                count: 0
            },
            mutations: {
                increment (state) {
                    state.count++
                }
            },
            // context 存在commit 和 state两个属性
            actions: {
                increment (context) {
                    context.commit('increment')
                },

                // { commit } = context : { commit } 相当于这样结构赋值
                // 这边还可以带一个payload
                increment ({ commit, state }, payload) {
                    commit('increment')
                }
                this.$store.dispatch('increment', payload);
                ...mapActions({})
            }
        })
`
+ modules