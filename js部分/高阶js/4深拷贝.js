/**
 * 深拷贝对象 可拷贝数组和对象
 * @param {Object} obj 
 */
const deepClone = obj => {
    if (!obj instanceof Object) return;

    let newObj = obj instanceof Array ? [] : {}; //第二次调用区分数组和obj
    for (let name in obj) {
        let tmp = obj[name];
        if (tmp instanceof Array || tmp instanceof Object) {
            // 如果是数组，需要写在object前面 因为[] instanceof Object === true
            newObj[name] = deepClone(tmp);
        } else {
            newObj[name] = tmp;
        }
    }
    return newObj;
}

let d = {
    name: 'zzb',
    age: 120,
    b: {
        fuck: 'shit'
    },
    c: [1, 2, 4, 3]
}

let newObj = deepClone(d);
d.b.age = 64;
console.log(newObj);

// 修改更正
const deepClone = obj => {
    if (!obj instanceof Object) return;
    let newObj = Array.isArray(obj) ? [] : {};
    for (let name in obj) {
        let tmp = obj[name];
        newObj[name] = Array.isArray(tmp) ? deepClone(tmp) : (tmp instanceof Object ? deepClone(tmp) : tmp);
    }
    return newObj;
}

const deepClone = obj => {
    if (!obj instanceof Object) return;
    let newObj = Array.isArray(obj)? []: {};
    for (let name in obj ) {
        newObj[name] = Array.isArray(obj[name])? deepClone(obj[name]) : (obj[name] instanceof Object? deepClone(obj[name]):obj[name])
    }
    return newObj;
}