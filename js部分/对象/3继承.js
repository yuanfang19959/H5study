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
Father.prototype.money = function () {
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
let phone = new Phone(1,2)
class Iphone extends Phone {
    constructor(k, d, c) {
        super(d, c);
        this.k = k;
    }
}

/**
 * 1.借用构造函数（经典继承）
 *  缺点：
 *  1. 构造函数中定义的方法无法复用
 *  2. 超类型的原型中定义的方法，不会继承 
 */
function SuperType() {
    this.colors = ['red', 'blue', 'green']
}

function SubType() {
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push('bba');
alert(instance1.colors);

var instance2 = new SubType();
alert(instance2.colors);
// 以上实例的colors属性并不共享

// ex2 传递参数
function SuperType(name) {
    this.name = name;
}

SuperType.prototype.talkAge = function () {
    alert(this.age)
}

function SubType() {
    //这边call的话只让this添加构造函数中的方法 不执行原型变更
    SuperType.call(this, "zzb");
    console.log(this)
    this.age = 29;
    console.log(this)
}

var instance = new SubType();
alert(instance.name);
instance.talkAge() //此talkAge方法实例并不会继承；


/**
 * 2.组合继承（伪经典继承）==>>>结合原型链和借用构造函数技术
 *   原型链==>>对原型属性和方法的继承
 *   构造函数==>>对实例属性的继承
 */
function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'yellow', 'green']
}

SuperType.prototype.sayName = function () {
    alert(this.name);
}

function SubType(name, age) {
    // 继承属性
    SuperType.call(this, name);
    this.age = age;
}

// 继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    alert(this.age);
}

var instance1 = new SubType('zzb', 30);
instance1.colors.push('black');
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType('wlq', 20);
instance2.colors.push('black222');
instance2.sayName();
instance2.sayAge();



/**
 * 3.原型式继承
 * 缺点：包含引用类型的属性始终都会共享相应的值；
 */
//这里的object对对象进行了一次浅复制；
function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

let person = {
    name: 'zzb',
    friends: ['zzb', 'wlq']
}

let newPeople = object(person);
newPeople.name = 'ddd';
newPeople.friends.push('opopop');

let twoPeople = object(person);
twoPeople.friends() //['zzb','wlq','opopop']

/**
 * Object.create(obj1, obj2) 完全可以替代上述object方法 
 * @param {Object} obj1 obj1为新对象的原型对象
 * @param {Object} obj2 与Object.defineProperties()与第二个参数格式相同
 * ，每个属性都是通过自己的描述符定义的。
 */
let person = {
    name: 'zzb',
    friends: ['zzb', 'wlq']
}

var personNew = Object.create(person, {
    name: {
        value: 'wlq'
    }
})
//此方式定义的属性并可以删除delete（除非设置默认属性configurable这些东西）；并且如果原型中存在会覆盖



/**
 * 4.寄生式继承
 * 缺点：这里的函数不能够做到函数的复用，从而降低了效率
 */

function createAnother(original) {
    //任何能返回新对象的函数都可以代替object
    let clone = object(original);
    clone.sayHi = function () {
        alert('hi')
    }
    return clone;
}



/**
 * 5.寄生组合式继承
 */
