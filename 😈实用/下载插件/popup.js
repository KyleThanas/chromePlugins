function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response)
    })
  })
}
sendMessageToContentScript({ cmd: 'test', value: 'test' }, function (
  videoType
) {
  var boxEl = document.getElementsByTagName('ul')[0]
  //var videoType = [{ key: 'qeqw', val: 'adasda' }, { key: 'qeqw', val: 'adasda' }, { key: 'qeqw', val: 'adasda' }]
  var videoStr = ''
  videoType.forEach((item) => {
    videoStr +=
      '<li>' +
      '<label>清晰度：' +
      '<span>' +
      item.key +
      '</span>' +
      '</label>' +
      '<a href=' +
      item.val +
      " download='pornhub.mp4' >下载</a>" +
      '</li>'
  })
  boxEl.innerHTML = videoStr
})
