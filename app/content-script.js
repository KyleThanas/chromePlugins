;(function () {
  console.log('这是 KyleThanas 的content-script！')
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.cmd == 'test') sendResponse('videoType')
  })
})()
