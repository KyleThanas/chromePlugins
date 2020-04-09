function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response)
    })
  })
}

// 下载视频
sendMessageToContentScript({ cmd: 'download' }, ({ filename, fileurl }) => {
  $('#download').attr({ filename, fileurl })
})

$('#download').on('click', function () {
  const filename = $('#download').attr('filename')
  const fileurl = $('#download').attr('fileurl')
  chrome.downloads.download({
    url: fileurl,
    filename: String(filename)
  })
})
