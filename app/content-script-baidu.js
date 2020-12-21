;(function () {
  console.log('content-script ---- www.baidu.com!!')
})()

// 登录过百度才会种下这个local
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.cmd == 'getStorage') {
    const value = 'www.baidu.com'
    chrome.storage.local.set({ thisWebsite: value })
    sendResponse()
  }
})
