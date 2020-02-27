const getQueryString = () => {
    let url = location.search ? location.search.substring(1) : "";
    if (!url) return; //不存在search 退出；

    let tmp = url.split('&');
    let queryOBJ = {};
    tmp.forEach(params => {
        let arr = params.split('=');
        // 可能存在url被encode的情况
        let name = decodeURIComponent(arr[0]);
        let val = decodeURIComponent(arr[1]);
        queryOBJ[name] = val;
    })
    return queryOBJ;
}


const getSearchParam = () => {
    let searchStr = location.search ? location.search.substring(1) : '';
    if (!searchStr) return;
    let searchObj = {};
    let tmpArr = searchStr.split('&');
    tmpArr.map( its => {
        let [name, val] = its.split('=');
        name = decodeURIComponent(name);
        val = decodeURIComponent(val);
        searchObj[name] = val;
    })
    return searchObj;
}