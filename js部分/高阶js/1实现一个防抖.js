// function success() {
//     console.log('提交成功！');
// }

// const debounce = (fn, delay) => {
//     let timer = null;
//     return (...args) => {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.apply(this, args)
//             // 这边可以提供参数和绑定this
//         }, delay)
//     }
// }

// let oDebounce = debounce(success, 1000);

// let el = document.querySelector('#el');
// el.addEventListener('click', oDebounce);

// 2月25日更新
// 多次点击后 最后一次才执行
const debouce = (fn, delay) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, ...args);
        }, delay)
    }
}

function show() {
    let args = Array.from(arguments);
    console.log(...args)
}

let el = document.querySelector('#el');
el.addEventListener('click', debouce(show, 1000).bind(this, 123, 456));