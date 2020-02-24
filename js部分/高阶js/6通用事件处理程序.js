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
    },
    // 获取event对象
    getEvent: function (event) {
        return event ? event : window.event
    },
    // 获取目标
    getTarget: function (event) {
        return event ? event.target : event.srcElement;
    },
    // 阻止默认行为
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    // 停止冒泡
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true;
        }
    },
}