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

// chrome.notifications.create(null, {
//   type: 'list',
//   iconUrl: 'img/kt128.png',
//   title: 'title',
//   message: 'message',
//   contextMessage: 'contextMessage！',
//   buttons: [
//     { title: '按钮1', iconUrl: 'img/kt128.png' },
//     { title: '按钮2', iconUrl: 'img/kt128.png' }
//   ],
//   items: [
//     { title: '消息1', message: '今天天气真好！' },
//     { title: '消息2', message: '明天天气估计也不错！' }
//   ]
// })

// chrome.notifications.onClosed.addListener((id, byUser) => {
//   alert(byUser)
// })
