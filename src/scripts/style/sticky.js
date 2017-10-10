/**
 * Created by zhengzk on 2017/9/11.
 */

/**
 * 自动吸顶
 * @param eleId
 * @param parId
 */
function navLocation (eleId, parId) {
    let nav = document.querySelector(eleId)
    if (isSupportSticky()) {
        document.querySelector(parId).classList.add('sticky')
    } else {
        let onScroll = function () {
            let pnav = document.querySelector(parId)
            if(!pnav){
                return
            }
            let navOffsetY = pnav.offsetTop
            if (window.scrollY >= navOffsetY) {
                nav.classList.add('fixed')
            } else {
                nav.classList && nav.classList.remove('fixed')
            }
        }
        window.addEventListener('scroll', onScroll)
    }
}

/**
 * 判断是否支持 sticky
 */
function isSupportSticky () {
    let prefixTestList = ['', '-webkit-', '-ms-', '-moz-', '-o-']
    let stickyText = ''
    for (let i = 0; i < prefixTestList.length; i++) {
        stickyText += 'position:' + prefixTestList[i] + 'sticky;'
    }

    let div = document.createElement('div')
    div.style.cssText = ' display:none; ' + stickyText
    document.body.appendChild(div)
    let isSupport = /sticky/i.test(window.getComputedStyle(div).position)
    document.body.removeChild(div)
    div = null
    return isSupport
}