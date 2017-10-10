/**
 * Created by zhengzk on 2017/3/31.
 */

import utils from './base/base'

/**
 * 判断storage是否可用
 * @param storage
 * @returns {boolean}
 */
function storageSupported (storage = window.sessionStorage) {
    var testKey = 'test'
    try {
        storage.setItem(testKey, '1')
        storage.removeItem(testKey)
        return true
    } catch (error) {
        return false
    }
}

/**
 * 转换storage
 * @param storage
 * @returns {set: set, get: get, remove: remove}
 */
function storageParser (storage) {
    var supported = storageSupported(storage)
    if (!supported) {
        // throw new Error(storage + 'not supported')
        console.error(storage + 'not supported')
    }

    return {
        /**
         * 存储数据
         * @param key
         * @param value
         */
        set (key, value) {
            if (supported) {
                var val = value
                if (utils.isPlainObject(value)) {
                    val = JSON.stringify(value)
                }
                storage.setItem(key, val)
            }
        },
        /**
         * 解析数据
         * @param key
         * @param isObject
         * @returns {*}
         */
        get (key, isObject) {
            var val
            if (supported) {
                val = storage.getItem(key)
                if (isObject && val) {
                    var ret
                    try {
                        ret = JSON.parse(val)
                    } catch (e) {

                    }
                    return ret
                }
            }
            return val
        },
        /**
         * 移除数据
         * @param key
         */
        remove (key) {
            if (supported) {
                storage.removeItem(key)
            }
        }
    }
}

let sessionStorage = storageParser(window.sessionStorage)
let localStorage = storageParser(window.localStorage)

export default {
    localStorage,
    sessionStorage
}
