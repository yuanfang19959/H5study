function deleteCookie(name) {
    var date = new Date();
    console.log(date.getTime())
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=v; expires=" + date.toGMTString();
}

const deleteCookie = name => {
    let date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = `${name}=v; expires=${date.toGMTString()}`
}