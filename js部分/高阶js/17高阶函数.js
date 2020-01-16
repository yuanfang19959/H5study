// 高阶函数：接收函数作为参数或者 将函数作为返回值
// 柯力化
function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1); //截取传入的参数 一个
    console.log(args);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    }
}

function hu() {
    console.log(11111111)
}

curry(hu)()