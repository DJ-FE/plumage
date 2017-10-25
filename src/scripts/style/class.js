/**
 * 是否包含class
 * @param obj
 * @param cls
 * @returns {Array|{index: number, input: string}}
 */
function hasClass (obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * 增加class
 * @param obj
 * @param cls
 */
function addClass (obj, cls) {
  if (!this.hasClass(obj, cls)) obj.className += ' ' + cls
}

/**
 * 移除class
 * @param obj
 * @param cls
 */
function removeClass (obj, cls) {
  if (this.hasClass(obj, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    obj.className = obj.className.replace(reg, ' ')
  }
}

/**
 * toggle class
 * @param obj
 * @param cls
 */
function toggleClass (obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls)
  } else {
    addClass(obj, cls)
  }
}

export default {
  hasClass,
  addClass,
  removeClass,
  toggleClass
}
