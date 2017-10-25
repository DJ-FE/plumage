/**
 * Created by zhengzk on 2017/10/1.
 */
import base from './base/base'
import browser from './base/browser'
import load from './base/load'
import storage from './storage'
import locate from './base/locate'
import clazz from './style/class'
import title from './hack/title'

import url from './url'
import hash from './hash'
import cookie from './cookie'

var _plumage = window['__NAME__']

// export default { url, hash, ...base, ...browser, ...load }
export default Object.assign({
  version: '__VERSION__',
  /**
   * 释放并返回plumage 解决命名冲突
   * @param flag
   * @returns {Function}
   */
  noConflict: function () {
    if (window['__NAME__'] === _plumage) {
      window['__NAME__'] = _plumage
    }
    return _plumage
  },
  url,
  hash,
  cookie
}, base, browser, clazz, load, storage, locate, title)
