;(function () {
  function Func() {
    return new Promise((resolve, reject) => {
      var a = document.querySelector('#player >script:nth-child(2)')
      if (!a) {
        a = document.querySelector('#player >script:nth-child(1)')
      }
      a = a.innerHTML
      a = `	var playerObjList = {};\n${a}`
      var c = a.match('flashvars_[0-9]{1,}')[0]
      eval(a)
      var d = eval(c)
      resolve(d)
    })
  }

  const filename =
    ($('.inlineFree:first').text() ||
      `未命名${Math.random().toString(16).slice(2)}`) + '.mp4'

  Func().then((res) => {
    var videoType = []
    Object.keys(res).forEach((item) => {
      if (item.startsWith('quality_')) {
        var obj = {
          key: item,
          val: res[item]
        }
        videoType.push(obj)
      }
    })
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      if (request.cmd == 'download') {
        sendResponse({ videoType, filename })
      }
    })
  })
})()
