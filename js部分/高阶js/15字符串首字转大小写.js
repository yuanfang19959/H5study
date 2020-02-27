// aa_bb_cc
// const dealWithStr = str => {
//     let arr = str.split('_');
//     let newStr = "";
//     arr.forEach(ite => {
//         let tmp = ite.split('');
//         tmp[0] = tmp[0].toUpperCase();
//         newStr += tmp.join('')
//     });
//     // newStr += arr.join('');
//     return newStr;
// }

// dealWithStr('aa_bb_bb')

const handleStr = str => {
    let tmp = str.split('_');
    let newStr = '';
    tmp.map(item => {
        let tmpItem = item.split('');
        tmpItem[0] = tmpItem[0].toUpperCase();
        newStr += tmpItem.join('');
    })
    return newStr;
}

handleStr('aa_bb_bb')
console.log(handleStr('aa_bb_bb'))