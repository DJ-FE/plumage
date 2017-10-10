/**
 * Created by zhengzk on 16/8/29.
 */

var utils = {
  /**
   * isWindow
   * @param obj
   * @returns {boolean}
   */
  isWindow: function (obj) {
    return obj != null && obj == obj.window;
  },
  /**
   * isDocument
   * @param obj
   * @returns {boolean}
   */
  isDocument: function (obj) {
    return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
  },
  /**
   * 获取元素节点名称
   * @param elem
   * @param name
   * @returns {Function|string|boolean}
   */
  nodeName: function (elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }
}
export default utils