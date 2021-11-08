(function () {
  function loadJS (url, success) {
    var domScript = document.createElement('script')
    domScript.src = url
    domScript.onload = domScript.onreadystatechange = function () {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        success && success()
        this.onload = this.onreadystatechange = null
        this.parentNode.removeChild(this)
      }
    }
    document.getElementsByTagName('head')[0].appendChild(domScript)
  }

  loadJS('./static/time/js/index.3c3eb066.js', function () {
    loadJS('./static/time/js/chunk-vendors.8bcfda84.js', function () {
      // loadJS('$app')
    })
  })
})()

