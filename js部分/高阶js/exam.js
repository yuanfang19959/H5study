// 防抖
// 最后一次点击才会触发函数
const debounce = (fn, ...args) => {
    let timeID = null;
    return () => {
        clearTimeout(timeID);
        timeID = setTimeout(() => {
            fn.call(this, ...args)
        }, 1000)
    }
}

const cls = (...args) => {
    console.log(...args)
}

const dd = debounce(cls, 1111, 2222, 3333);
document.body.addEventListener('click', dd)

// 节流
// 按照指定的时间间隔触发
const throttle = (fn, delay, ...args) => {
    let flag = true;
    return () => {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.call(this, ...args)
            flag = true;
        }, delay)
    }
}
const cls = (...args) => {
    console.log(...args)
}

const dd = throttle(cls, 2000, 1111, 2222, 3333);
document.body.addEventListener('click', dd)