function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response)
    })
  })
}

sendMessageToContentScript({ cmd: 'download' }, ({ videoType, filename }) => {
  var videoStr = ``
  videoType.forEach((item) => {
    videoStr += `<p id="${item.key}" filename="${filename}" fileurl="${item.val}">${item.key}</p>`
  })

  $('#box').html(videoStr)
})

const download = (dom) => {
  chrome.downloads.download({
    url: dom.attr('fileurl'),
    filename: String(dom.attr('filename'))
  })
}

$(document).on('click', '#box p', function () {
  download($(this))
})
