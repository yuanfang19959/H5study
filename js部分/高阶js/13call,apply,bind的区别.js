// 共同点：都为Function上的方法；其中bind不会调用原来的函数
/**
 * call（obj， arg1， arg2）；
 * obj必传， 后面的为参数
 * 当参数大于3是性能优于apply
 * 应用： 实现继承
 */
function Father(name, age, d) {
    this.name = name;
    this.age = age;
    this.d = d;
}

function Son(name, age, d) {
    Father.call(this, name, age, d);

    // 使用下面的方式，实际创建的时Father的实例
    // let dd = new Father(name, age, d);
    // return dd;
}

let son = new Son('zzb', 24, 'ji')

/**
 * apply（obj, args）
 * 两个参数 obj， args为数组（或者类数组对象）
 * 应用：下面可以求最大最小值
 */

let arr = [1, 5, 666, 3];
let max = Math.max.apply(Math, arr);
let min = Math.min.apply(Math, arr);
let max1 = Math.max(...arr)
console.log(max, max1, min)



/**
 * bind 不会调用原来的函数，返回一个原函数的指针
 */
function fn() {
    alert(this.name);
}
let obj = {
    name: 'woshinidie'
}
fn.bind(obj)()

