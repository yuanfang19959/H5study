/**
 * 实现一个bind 参数被绑参数，执行环境
 * @param {Function} fn 
 * @param {Object} context 
 */
const bind = (fn, context) => {
    return () => {
        return fn.apply(context, arguments);
    }
}


const computeTime = (function () {
    var args = [];

    return function () {
        if (!arguments.length) {
            let time = 0;
            args.map(item => {
                time += item;
            })
            return time;
         } else {
             [].push.apply(args, arguments);
         } 
    }
})()

computeTime(1);
computeTime(6.7)
computeTime(8);

console.log(computeTime())

