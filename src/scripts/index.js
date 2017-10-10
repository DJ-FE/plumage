/**
 * Created by zhengzk on 2017/10/1.
 */

import browser from './base/browser'
import base from './base/base'
import load from './base/load'
import url from './url'
import hash from './hash'
import cookie from './cookie'
import storage from './storage'

// export default { url, hash, ...base, ...browser, ...load }
export default Object.assign({url, hash, cookie}, base, browser, load, storage)
