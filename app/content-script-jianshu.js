;(function () {
  function copyText(text, callback) {
    // text: 要复制的内容， callback: 回调
    var tag = document.createElement('input')
    tag.setAttribute('id', 'cp_input')
    tag.value = text
    document.getElementsByTagName('body')[0].appendChild(tag)
    document.getElementById('cp_input').select()
    document.execCommand('copy')
    document.getElementById('cp_input').remove()
    if (callback) {
      callback(text)
    }
  }

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
    if (request.cmd == 'getStorage') {
      const value = 'www.jianshu.com'
      chrome.storage.local.set({ thisWebsite: value })
      sendResponse()
    }
    if (request.cmd == 'download') {
      const response = {
        fileurl: data[0] || data[1] || data[2],
        filename: $('section:first h1:first').text()
      }
      sendResponse(response)
    }
  })

  const title = $('section:first h1:first').text()
  const copyHtml = `<span id="copy" style="color: #f4e04d;background-color: #00bcd4;padding: 10px;border-radius: 20px;cursor: pointer;">复制</span>`
  $('section:first h1:first').html(title + copyHtml)
  $('#copy').on('click', copyText(title))
})()
