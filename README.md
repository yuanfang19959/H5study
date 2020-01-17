## JS部分
### call和apply和bind有什么区别？哪个性能更好一些？
`

    let tmp = [10, 20, 30, 40];
    let obj = {};
    function fn(x, y, z, ...) {};
    fn.call(obj, ...tmp); 
    // 参数 绑定对象 和 每一项

    fn.apply(obj, tmp);
    // 参数 绑定对象 和 数组

    相同：都是Function上的方法；
    性能：call在参数三个以上的时候性能优于apply；
    
    性能测试：
    console.time("A");
    for (let i = 0; i < 1000000; i++) {}
    console.timeEnd("A");

`

---

### 箭头函数和普通函数有什么区别？
+ 箭头函数比普通函数更加简洁
+ 箭头函数没有自己的this，需要根据上下文来判断（call， apply无法改变指向）
+ 箭头函数没有argument，但是可以通过...arg来获取；
+ 箭头函数不能使用new来创建对象，因为它没有prototype；

---
### 取反一个字符串，如：aBc => AbC
+ 方法一不使用正则

`

    function translateStr(str) {
        let arr = str.split("");
        let result = arr.map(letter => {
            if (letter >= 'A' && letter < 'Z') {
                return letter.toLowerCase();
            } else if (letter >= 'a' && letter < 'z'){
                return letter.toUpperCase();
            } else {
                return letter;
            }
        })
        return result.join('');
    }
    let result = translateStr('aBsa0BxdeD1')
    console.log(result);

`

---
### 给定字符串S，匹配是否存在T。若存在，返回首次出现的位置，否则，返回-1；
`
  
    funtion () {
        function searchIndexOf(T) {
            for (let i = 0; i < T.length; i++) {
                
            }
        }
        String.prototype.searchIndexOf = searchIndexOf;
    }()


`

### 严格模式？
#### this指向
+ 全局作用域中函数的this指向undefined
+ 构造函数不用new调用，this会报错

#### 变量
+ 不能随意删除已经申明好的变量
+ 变量必须先定义在使用

#### 函数
+ 函数不允许有重复的参数
+ 不允许在非函数代码块定义函数


### 事件流
+ 事件捕获 -> 处于目标 -> 事件冒泡
1. HTML事件处理程序

`

        <input type="text" onclick="handler()">
        // 缺点不易维护，可能存在页面已经渲染好js代码还没加载完成用户点击按钮造成无法响应；

`

2. DOM0级

`
  
        1. 默认在冒泡阶段触发
        2. 其中的this为元素所在的作用域
        btn.onclick = function() {}
        
        // 移除事件
        btn.onclick = null;


`

3. DOM2级

`       

        特点：可以添加多个相同事件
        // 参数为true的情况下 点击btn 会触发事件捕获
        // body -> div -> btn
        document.body.addEventListener('click', function () {
            alert('body')
        }, true)
        div.addEventListener('click', function () {
            alert('div')
        }, true)
        btn.addEventListener('click', function () {
            alert('btn')
        }, true)
        

        // 参数为false的情况下 点击btn 会触发事件捕获. 默认不传false的话 会执行冒泡
        // btn -> div -> body
        document.body.addEventListener('click', function () {
            alert('body')
        })
        div.addEventListener('click', function () {
            alert('div')
        })
        btn.addEventListener('click', function () {
            alert('btn')
        })

        // 移除事件 需要传入相同的参数；但是如果里面是匿名函数的话 则无法移除
        btn.removeEventListener('click', function(){}, false)


`

4. IE事件处理程序

`

        // 这里面的this === window 仅支持ie11以下
        // ie8以下会以相反的顺序执行 
        var btn = document.getElementById("btn");
        btn.attachEvent('onclick', function(){
            alert(this === window)
        })
        btn.attachEvent('onclick', function(){
            alert(11111111111111)
        })
        
        // 移除事件 但是匿名函数的事件无法移除
        btn.detachEvent('onclick', function(){
            alert(11111111111111)
        })


`
