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

  Func().then((res) => {
    var videoType = {}
    Object.keys(res).forEach((item) => {
      if (item.startsWith('quality_')) {
        videoType[item] = res[item]
      }
    })
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      if (request.cmd == 'download') {
        // const videoType = {
        //   quality_1080p: 'http://114.67.228.124/index.mp4',
        //   quality_720p: 'http://114.67.228.124/mt.mp4',
        //   quality_480p: 'http://114.67.228.124/mt.mp4',
        //   quality_240p: 'http://114.67.228.124/mt.mp4'
        // }

        const response = {
          fileurl:
            videoType['quality_1080p'] ||
            videoType['quality_720p'] ||
            videoType['quality_480p'] ||
            videoType['quality_240p'],
          filename:
            ($('.inlineFree:first').text() ||
              `未命名${Math.random().toString(16).slice(2)}`) + '.mp4'
        }
        sendResponse(response)
      }
    })
  })
})()
