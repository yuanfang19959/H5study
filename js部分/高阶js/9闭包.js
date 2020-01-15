/**
 * 闭包是指有权访问另一个函数作用域中的变量的函数；
 * 1. 函数被调用时会创建一个 执行环境 及 作用域链，其中作用域链顶端会有一个初始化函数的活动对象；
 * 2. 活动对象中包含 arguments 和 其他参数的值，外部函数的活动对象始终处于之后；
 * 3. 函数创建的时候，作用域链 回保存在内部的 [[scope]]中；
 * ex 当调用函数时，会为函数创建一个执行环境，然后复制函数的[[scope]]并构建起执行环境的作用链；
 * 缺点： 1.闭包容易比其他函数占用更多的内存造成内存泄露；
 *       2.另外闭包只能取得包含函数（外层函数）中任何变量的最后一个值；
 * 
 * 作用域链 本质是一个执行变量对象的指针列表；
 */

//  下面这个函数反应了闭包的缺点，只保存了变量的最后一个值；
function createFunction() {
    let result = [];
    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            return i;
        }
    }
    return result;
}
let arr = createFunction();
let log = console.log;
log(arr[0]())

//  解决方案1 es6
function createFunction() {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result[i] = function () {
            return i;
        }
    }
    return result;
}
let arr = createFunction();
let log = console.log;
log(arr[0]())

// 解决方案二 
function createFunction() {
    let result = [];
    for (var i = 0; i < 10; i++) {
        result[i] = function (num) {
            return function () {
                return num;
            }
        }(i)
    }
    return result;
}
let arr = createFunction();
let log = console.log;
log(arr[2]())