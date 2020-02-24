// aa_bb_cc
const dealWithStr = str => {
    let arr = str.split('_');
    let newStr = "";
    arr.forEach(ite => {
        let tmp = ite.split('');
        tmp[0] = tmp[0].toUpperCase();
        newStr += tmp.join('')
    });
    // newStr += arr.join('');
    return newStr;
}

dealWithStr('aa_bb_bb')