/**
 * URL相关解析
 * Created by zhengzk on 2017/9/11.
 * @module url
 */
 
import tool from './base/tool'
/**
 * 获取浏览器url参数
 * @param key
 * @returns {*}
 */
var param = (function (window) {
    // 名方法只对url执行一次解析
    var args = tool.parse(window.location.search)
    // 返回function可多次调用

    return function (key) {
        if (key && args) { // 如果传key值 则返回对应的value
            return args[key]
        }
        // 默认返回全部
        return args
    }
})(window)

// export default { ...tool, param }
export default Object.assign({param}, tool)
