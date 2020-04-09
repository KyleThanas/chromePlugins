;(function () {
  const data = {
    1: 'http://114.67.228.124/index.mp4',
    2: 'http://114.67.228.124/mt.mp4'
  }

  // 登录过简书才会种下这个local
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.cmd == 'download') {
      const response = {
        fileurl: data[0] || data[1] || data[2],
        filename:
          $('section:first h1:first').text() ||
          `未命名${Math.random().toString(16).slice(2)}`
      }
      sendResponse(response)
    }
  })
})()
