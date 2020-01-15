let log = console.log;
// es6新增方法

// 不改变原有数组
// 1. concat返回一个新的数组， 参数可以是数组，或者其他；
// let newArr = Array.concat(arr1, arr2, arr3, number, number2)
let arr = [1, 2, 3, 4, 5]
let test = ['qa', 'qb']
let result = arr.concat(test);
log(result);
log(arr)


// 2. 返回一个字符串，参数可选。没有参数会以逗号拼接
// let str = Array.join(separator)
let str = arr.join();
log(str); //1,2,3,4

let str_2 = arr.join("")
log(str_2); //1234

let str_3 = arr.join('-')
log(str_3); //1-2-3-4
log(arr)

// 3. slice(start, end) 截取范围 [start, end) start必选，若为负数则从尾部开始数 
// 返回被截取的元素数组
let dd = ['zheng', 'zhi', 'bin'];
log(dd.slice(1, 2))


// 4. toString() 将数组转化为字符串不改变原有数组
log(arr.toString()+"dddddddddddddddddddd")
log(arr)




// 改变原有数组
// 1. pop() 方法，移除数组的最后一项，并减小数组的长度；
// 并且返回最后一个元素，如果数组是空的：返回undefined
let brr = [11, 2, 3, 4, 5];
let brr_2 = [];
let result_2 = brr.pop();
log(result_2) //5
log(brr_2.pop())
log(brr) //数组的长度被减少一个


// 2. push(x, y, ..., z)方法 其中x是必须的；返回新的长度
brr.push(1233);
log(brr)


// 3. reverse() 颠倒数组的顺序
brr.reverse();
log(brr);

// 4. shift() 删除并返回数组的第一个元素
log(brr.shift())
log(brr)

// 5. unshift() 在数组第一项添加元素，并返回新的长度
log(brr.unshift(11111, 2222))

// 6. sort(fn) 排序方法 参数必须为函数，如果不传的话 会以字母顺序对数组中的元素进行排序
function fn(a, b) {
    return a - b;
    // a - b < 0升序
    // a - b > 0 降序
}
log(brr.sort(fn))

// 7. splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
// Array.splice(index, howMany, item1, ... itemx)
// index 被删除的索引位置 从0开始
// howMany 要删除的个数, 不想删除也可以为0
// item1 添加的元素

let arr_0 = new Array(6)
arr_0[0] = "George"
arr_0[1] = "John"
arr_0[2] = "Thomas"
arr_0[3] = "James"
arr_0[4] = "Adrew"
arr_0[5] = "Martin"
log(arr_0.splice(2, 3)) //返回被删除的项目

// 