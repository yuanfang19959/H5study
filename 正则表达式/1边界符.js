// ^ 以什么开头
// $ 结尾
const log = console.log;
// 不加边界符会去字符串中查找是否匹配模式
let reg = /abc/
log(res.test('abc')) //true
log(res.test('abcc')) //true

// 下面是全匹配
let regd = /^abv$/

