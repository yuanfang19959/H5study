/**
 * 跨浏览器事件处理函数
 * @param {Object} ele 
 * @param {String} type 
 * @param {Function} handle 
 */
var EventUtil = {
    addEvent(ele, type, handle) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handle)
        } else if (ele.attachEvent) {
            ele.attachEvent('on' + type, handle);
        } else {
            ele['on' + type] = handle;
        }
    },
    removeEvent(ele, type, handle) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handle)
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + type, handle);
        } else {
            ele['on' + type] = handle;
        }
    },
    //获取事件对象
    getEvent(event) {
        return event ? event : window.event;
    },
    // 获取目标元素
    getTarget(event) {
        return event.target || event.srcElement;
    },
    // 阻止默认行为
    preventDefault(event) {
        if (event.preventDefault) {
            event.preventDefault()
        } else {
            event.returnValue = false;
        }
    },
    // 取消冒泡
    stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true;
        }
    }
}