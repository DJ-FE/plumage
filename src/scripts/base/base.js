
var hasOwnProp = Object.prototype.hasOwnProperty

/**
 * 判断数据是否为数组类型
 * @param {Array} arr
 */
function isArray (arr) {
    return Object.prototype.toString.apply(arr) === '[object Array]'
}

/**
 * isArrayLike
 * @param obj
 * @returns {boolean|*}
 */
function isArrayLike (obj) {
    return isArray(obj) || (!isFunction(obj) && (obj.length === 0 || ((typeof obj.length === 'number') && (obj.length > 0) && ((obj.length - 1) in obj))))
}

/**
 * 判断数据是否为对象
 * @param {Object} obj
 */
function isObject (obj) {
    return Object.prototype.toString.apply(obj) === '[object Object]'
}

/**
 * 判断fn是否是Function
 * @param fn Function
 * @returns {boolean}
 */
function isFunction (fn) {
    return Object.prototype.toString.call(fn) === '[object Function]'
}

/**
 * 判断是否是Object
 * @param obj
 * @returns {boolean}
 */
function isPlainObject (obj) {
    return !!obj &&
      typeof obj === 'object' &&
      obj.toString() === '[object Object]' &&
      obj.constructor === Object
}

/**
 * 判断是否为空对象
 * @param e
 * @returns {boolean}
 */
function isEmptyObject (e) {
    var t
    for (t in e) {
        return false
    }
    return true
}

/**
 * 清楚字符串空格
 * @param text
 * @returns {string}
 */
function trim (text) {
    var reg = /(^\s*)|(\s*$)/g
    return text == null ? '' : (text + '').replace(reg, '')
}

/**
 * 空function
 */
function noop () {
}
/**
 *
 * @param first {Object}
 * @param second {Object}
 * @returns {*}
 */
function merge (first, second) {
    if (!second) {
        return first
    }
    for (var key in second) {
        if (hasOwnProp.call(second, key)) {
            first[key] = second[key]
        }
    }
    return first
}

/**
 * 遍利节点
 * @param obj
 * @param fn
 * @param context
 */
function each (obj, fn, context) {
    for (var key in obj) {
        if (hasOwnProp.call(obj, key)) {
            // inx,element
            fn.call(context || this, key, obj[key])
        }
    }
}

export default {
    trim,
    merge,
    each,
    noop,
    isFunction,
    isArray,
    isArrayLike,
    isObject,
    isPlainObject,
    isEmptyObject
}
