let reg = /^[a-z]$/ 
//只要字符串中存在以上中的字母中的一个  就会返回true
const log = console.log;
log(reg.test(1111111111111111111))
log(reg.test('a1111'))
log(reg.test('aaa')) //false


// 查找符合下面要求的一个字符
let reg2 = /^[a-zA-Z0-9_-]$/ 



// 括号内加一个^意思就是不能包含下面字符
let reg2 = /^[^a-zA-Z0-9_-]$/ 
