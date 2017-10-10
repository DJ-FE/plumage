/**
 * Created by zhengzk on 16/8/29.
 */
/**
 *
 * @param num
 * @param n
 * @returns {string}
 */
function pad(num, n) {
  return (Array(n).join(0) + num).slice(-n)
}

var utils = {
  /**
   * 72 —> [01,12]
   * @param time
   * @returns {Array}
   */
  long2array: function (time) {
    var rs = [], t;
    var arr = [60, 1];
    if (time >= 3600) {
      arr = [3600, 60, 1];
    }
    arr.forEach(function (p) {
      rs.push(pad(t = (time / p) | 0, 2));
      time -= t * p
    });
    return rs;
  },
  /**
   * 格式化时间 72 —> 00:01:12
   * @param long
   * @returns {string}
   */
  long2time: function (long) {
    var rs = utils.long2array(long);
    return rs.join(':');
  },
  /**
   * 将00:01:22的时间转换成 82
   * @param str
   * @returns {number}
   */
  time2long: function (str) {
    var arr = str.split(':');
    var r = 0;
    var len = arr.length;
    for (var k = len - 1; k >= 0; k--) {
      var t = parseInt(arr[k]);
      if (!isNaN(t)) {
        var w = len - k - 1;
        for (var i = 0; i < w; i++) {
          t *= 60;
        }
        r += t;
      }
    }
    return r;
  }
}

export default utils