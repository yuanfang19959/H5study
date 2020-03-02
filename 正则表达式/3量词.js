// * 出现0或多次
const log = console.log;
let reg = /^a*/
log(reg.test('a')) //t
log(reg.test('')) //t


// + 出现1次或多次
reg = /^a+/
log(reg.test('a')) //t
log(reg.test('')) //f

// ? 出现 1 || 0
reg = /^a?/
log(reg.test('a')) //t
log(reg.test('')) //t

// {n} 出现n次
reg = /^a{3}/
log(reg.test('a')) //f
log(reg.test('')) //f

// {n, } 出现>=n次
reg = /^a{3,}/
log(reg.test('aaa')) //t
log(reg.test('aa')) //f
log(reg.test('abaa')) //f

// {n,m} 出现[n, m]次
reg = /^a{3,9}/
log(reg.test('aaa')) //t
log(reg.test('aa')) //f
log(reg.test('abaa')) //f

