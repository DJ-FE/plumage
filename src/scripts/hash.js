/**
 * Created by zhengzk on 2017/9/11.
 */

import tool from './base/tool'

/**
 * 解析参数
 * @param key
 * @returns {*}
 */
function param (key) {
    var args = param.parse(window.location.hash)
    if (key in args) {
        return args[key]
    }
    return args
}

/**
 * 获取前端路由中的path
 * @returns {string}
 */
function path () {
    var path = (window.location.hash || '').split('?')[0] || ''
    return path.substring(path.indexOf('/'))
}

/**
 * 获取前端路由中的search
 * @returns {*}
 */
function search () {
    var search = (window.location.hash || '').split('?')[1] || ''
    return search ? '?' + search : search
}

/**
 * 改变hash值
 * @param hash
 */
function change (hash) {
    window.location.hash = hash
}

/**
 * 增加hash参数
 * @param args
 */
function add (args) {
    var hash = window.location.hash || ''
    var params = tool.parse(hash)
    change((hash.split('?')[0] || '') + '?' + tool.transform(Object.assign(params, args)))
}

/**
 * 移除hash参数
 * @param key
 */
function remove (key) {
    var hash = window.location.hash || ''
    var params = tool.parse(hash)
    delete params[key]
    var search = tool.transform(params)
    search = search ? '?' + search : search
    change((hash.split('?')[0] || '') + search)
}

export default {
    param,
    path,
    search,
    add,
    remove
}
