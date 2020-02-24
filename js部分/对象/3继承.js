// 1. 借用父构造函数继承属性
function Father(name, age) {
    this.name = name;
    this.age = age;
}

function Son(name, age) {
    Father.call(this, name, age)
}

// 2. 借用原型对象实现继承
function Father(name, age) {
    this.name = name;
    this.age = age;
}
Father.prototype.money = function() {
    console.log('还钱吧大哥！')
}

function Son(name, age) {
    Father.call(this, name, age)
}
// 用于让Son的原型指向Father的原型，这样就不会直接影响Father的原型对象
Son.prototype = new Father()
// 另外指向 father的实例 会让原来的构造函数丢失
Son.prototype.constructor = Son;
let son = new Son('zzb', 20)

// 3. es6方式
// 类的本质还是一个函数
class Phone {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}