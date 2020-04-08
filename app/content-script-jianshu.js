;(function () {
  console.log('content-script ---- www.jianshu.com!!')
})()

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('message: ', message)
  if (message.method === 'tab') {
    console.log(message.message)
  }
})

// 登录过简书才会种下这个local
const value = 'www.jianshu.com'
chrome.storage.local.set({ thisWebsite: value }, function () {
  console.log(thisWebsite, ' is set to ' + value)
})

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

const title = $('section:first h1:first').text()
const copyHtml = `<span id="copy" style="color: #f4e04d;background-color: #00bcd4;padding: 10px;border-radius: 20px;cursor: pointer;">复制</span>`

$('section:first h1:first').html(title + copyHtml)
$('#copy').on('click', function () {
  copyText(title)
})
