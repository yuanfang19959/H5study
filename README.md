## JS部分
### call和apply有什么区别？哪个性能更好一些？
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
