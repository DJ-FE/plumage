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

// export default { url, hash, ...base, ...browser, ...load }
export default Object.assign({url, hash, cookie}, base, browser, clazz, load, storage, locate, title)
