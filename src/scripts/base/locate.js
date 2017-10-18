/**
 * 地理信息相关操作
 */

/**
 * 获取地理位置
 * @param {object} 可选的PositionOptions对象
 * 返回promise对象
 */
function getLocation (options = {}) {
  return new Promise((resolve, reject) => {
    // 判断是否支持获取本地位置函数
    if (!navigator.geolocation) {
      var err = {
        code: 1,
        message: 'Browser does not support geolocation'
      }
      reject(err)
    }

    // 获取当前位置
    navigator.geolocation.getCurrentPosition(position => {
      resolve(position)
    }, err => {
      reject(err)
    }, options)
  })
}

export default {
  getLocation
}
