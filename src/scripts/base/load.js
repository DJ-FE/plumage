/**
 * Created by zhengzk on 2017/9/11.
 */

/**
 * 异步加载js
 * @param {String} url
 * @param {Object} options
 * - timeout {Number} how long after a timeout error is emitted (`60000`)
 * @returns {Promise}
 */
function loadScript (url, options = {}) {
    return new Promise((resolve, reject) => {
        if (!url) {
            reject(new Error('NO URL'))
        }

        let timeout = options.timeout || 60000
        let target = document.getElementsByTagName('script')[0] || document.head
        let timer, script

        // 超时自动取消
        if (timeout) {
            timer = setTimeout(() => {
                cleanup()
                reject(new Error('Timeout'))
            }, timeout)
        }

        // 清理函数
        function cleanup () {
            if (script.parentNode) script.parentNode.removeChild(script)
            if (timer) clearTimeout(timer)
        }

        // 创建js文件
        script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = url
        target.parentNode.insertBefore(script, target)

        // IE的script 元素支持onreadystatechange事件，不支持onload事件
        // FF的script 元素不支持onreadystatechange事件，只支持onload事件
        script.onload = script.onreadystatechange = function () {
            if (!script.readyState || script.readyState === 'loaded' || script.readyState === 'complete') {
                resolve()
                if (timer) clearTimeout(timer)
            }
        }
    })
}

/**
 * 增加脚本
 * @param scriptString
 */
function addScript (scriptString) {
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    var head = document.head || document.getElementsByTagName('head')[0]
    head.appendChild(script.appendChild(document.createTextNode(scriptString)))
}

/**
 * 加载样式表
 * @param path
 */
function loadStyle (path) {
    var link = document.createElement('link')
    link.href = path
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    var head = document.head || document.getElementsByTagName('head')[0]
    head.appendChild(link)
}
/**
 * 增加样式
 * @param cssString
 */
function addStyle (cssString) {
    var style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    if (style.styleSheet) { // IE
        style.styleSheet.cssText = cssString
    } else { // w3c
        var cssText = document.createTextNode(cssString)
        style.appendChild(cssText)
    }
    var head = document.head || document.getElementsByTagName('head')[0]
    head.appendChild(style)
}

export default {
    loadScript,
    addScript,
    loadStyle,
    addStyle
}
