
/**
 * 是否包含class
 * @param obj
 * @param cls
 * @returns {Array|{index: number, input: string}}
 */
function has(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

/**
 * 增加class
 * @param obj
 * @param cls
 */
function add(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

/**
 * 移除class
 * @param obj
 * @param cls
 */
function remove(obj, cls) {
    if (this.hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}


/**
 * toggle class
 * @param obj
 * @param cls
 */
function toggle(obj, cls){
    if(has(obj, cls)){
        remove(obj, cls)
    }else{
        add(obj, cls)
    }
}

export default{
    has,
    add,
    remove,
    toggle
}