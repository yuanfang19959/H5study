function trottleDD() {
    let args = Array.from(arguments);
    console.log(args)
}

// const throttle = (fn, delay) => {
//     let flag = true;
//     return (...args) => {
//         if (!flag) return;
//         flag = false;
//         setTimeout(() => {
//             fn.apply(this, args);
//             flag = true;
//         }, delay)
//     }
// }
// let oThrottle = throttle(trottleDD, 2000)

// let el = document.querySelector("#el");
// el.addEventListener("click", oThrottle)


// 2月25日
// 指定间隔完成一次
const throttle = (fn, delay) => {
    let flag = true;
    return (...args) => {
        if(!flag) return;
        flag = false; 
        setTimeout(() => {
            fn.call(this, ...args);
            flag = true;
        }, delay)
    }
}

let oThrottle = throttle(trottleDD, 2000)

let el = document.querySelector("#el");
el.addEventListener("click", oThrottle.bind(null, 123, 678))