function success() {
    console.log('提交成功！');
}

const debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
            // 这边可以提供参数和绑定this
        }, delay)
    }
}

let oDebounce = debounce(success, 1000);

let el = document.querySelector('#el');
el.addEventListener('click', oDebounce);