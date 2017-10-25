/**
 * 基础工具方法
 * Created by zhengzk on 2017/9/11.
 * @module url
 */

/**
 * ?a=1&b=2 --> {a:1,b:2}
 * @param search
 * @returns {*}
 */
function parse (search) {
  // 匿名方法只对url执行一次解析
  var args
  // 解析search
  var result = (search || '').match(new RegExp('[?&][^?&]+=[^?&]+', 'g'))
  if (result != null) {
    // 将结果转换为 object
    args = {}
    for (var i = 0; i < result.length; i++) {
      var ele = result[i]
      var inx = ele.indexOf('=')
      args[ele.substring(1, inx)] = ele.substring(inx + 1)
    }
  }
  return args
}

/**
 * 拼接URL参数 {a:1,b:2} -> a=1&b=2
 * @param t
 * @returns {string}
 */
function transform (t) {
  t = t || {}
  var e = []
  for (var i in t) {
    e.push(i + '=' + t[i])
  }
  return e.join('&')
}

export default {
  parse,
  transform
}
