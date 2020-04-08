chrome.contextMenus.create({
  title: '测试右键菜单',
  onclick: function () {
    chrome.notifications.create(null, {
      type: 'basic',
      iconUrl: 'img/kt128.png',
      title: '这是标题',
      message: '您刚才点击了自定义右键菜单！'
    })
  }
})

chrome.runtime.onInstalled.addListener(function () {
  console.log('addListener: ')
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          // 只有打开百度才显示pageAction
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'baidu.com' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ])
  })
})
