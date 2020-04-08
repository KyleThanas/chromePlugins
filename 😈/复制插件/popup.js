function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response)
    })
  })
}

sendMessageToContentScript(
  { cmd: 'test', value: '你好，我是popup！' },
  function (response) {
    console.log('来自content的回复：' + response)
  }
)

// 从存储中读取数据
chrome.storage.local.get('thisWebsite', function (result) {
  if (result) $('#local').text(result.thisWebsite)
})
