export default {
  /**
   * 设置页面title
   * @param title
   */
  setPageTitle (title) {
    document.title = title;
    var i = document.createElement('iframe');
    i.src = '/favicon.ico';
    i.style.display = 'none';
    i.onload = function() {
      setTimeout(function(){
        i.remove();
      }, 9)
    }
    document.body.appendChild(i);
  }
}
