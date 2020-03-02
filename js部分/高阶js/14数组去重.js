// 使用set
let arr = [1, 2, 3, 1, 2, 3, 1, 1, 1, 2, 4, 5];
// let newArr = new Set(arr);
// arr = Array.from(newArr);
// console.log(arr)

// 或者遍历
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j] && i !== j) {
            arr.splice(j, 1);
        }
    }
}
console.log(arr);