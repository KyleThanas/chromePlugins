;(function () {
  console.log('content-script ---- www.baidu.com!!')
})()

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('message: ', message)
  if (message.method === 'tab') {
    console.log(message.message)
  }
})

// 登录过百度才会种下这个local
const value = 'www.baidu.com'
chrome.storage.local.set({ thisWebsite: value }, function () {
  console.log(thisWebsite, ' is set to ' + value)
})
