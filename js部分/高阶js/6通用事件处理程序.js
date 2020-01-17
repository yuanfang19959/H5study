var EventUtil = {
    addEvent: function (ele, type, fn) {
        if (ele.attachEvent) {
            ele.attachEvent('on' + type, fn);
        } else if (ele.addEventListener) {
            ele.addEventListener(type, fn, false)
        } else {
            ele['on' + type] = fn;
        }
    },
    removeEvent: function () {
        if (ele.detachEvent) {
            ele.detachEvent('on' + type, fn);
        } else if (ele.removeEventListener) {
            ele.removeEventListener(type, fn, false)
        } else {
            ele['on' + type] = null;
        }
    }
}