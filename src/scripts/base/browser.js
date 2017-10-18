/**
 * Created by zhengzk on 2017/4/21.
 */

var userAgent = (window.navigator && window.navigator.userAgent) || ''
userAgent = userAgent.toLowerCase()
var isIPad = (/iPad/i).test(userAgent)
var isIPhone = (/iPhone/i).test(userAgent) && !isIPad
var isIPod = (/iPod/i).test(userAgent)
var isIOS = isIPhone || isIPad || isIPod
var isAndroid = (/Android/i).test(userAgent)
var isWechat = (/micromessenger/.test(userAgent))

export default {
    isIPod: isIPod,
    isIPad: isIPad,
    isIOS: isIOS,
    isIPhone: isIPhone,
    isAndroid: isAndroid,
    isWechat: isWechat
}
