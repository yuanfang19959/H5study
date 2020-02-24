// 实例成员 构造函数中this定义的
// 包括实例方法和属性 
// 一般用过 对象.成员 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.like = function() {
        console.log('66666')
    }
}
let zzb = new Person('zzb', 10);
zzb.like();

// 静态成员
Person.dd = 123;
console.log(Person.dd)
console.log(zzb.dd)
