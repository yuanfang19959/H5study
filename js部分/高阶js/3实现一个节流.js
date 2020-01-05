function trottleDD() {
    console.log('num')
}

const throttle = (fn, delay) => {
    let flag = true;
    return (...args) => {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, args);
            flag = true;
        }, delay)
    }
}
let oThrottle = throttle(trottleDD, 2000)

let el = document.querySelector("#el");
el.addEventListener("click", oThrottle)