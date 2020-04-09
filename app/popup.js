function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response)
    })
  })
}

function downloadFile(options) {
  if (!options.url) {
    var blob = new Blob([options.content], {
      type: 'text/plain;charset=UTF-8'
    })
    options.url = window.URL.createObjectURL(blob)
  }
  chrome.downloads.download({
    url: options.url,
    filename: options.filename
  })
}

// 从存储中读取数据
sendMessageToContentScript({ cmd: 'getStorage' }, () => {
  chrome.storage.local.get('thisWebsite', function (result) {
    if (result) $('#local').text(result.thisWebsite)
  })
})

// 下载视频
sendMessageToContentScript({ cmd: 'download' }, (result) => {
  $('#download').attr({ filename: result.filename, fileurl: result.fileurl })
})

$('#download').on('click', function () {
  const filename = $('#download').attr('filename')
  const fileurl = $('#download').attr('fileurl')
  downloadFile({
    filename,
    url: fileurl
  })
})
