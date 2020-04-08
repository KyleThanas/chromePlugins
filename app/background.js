chrome.contextMenus.create({
  title: '测s试右键菜单',
  onclick: function () {
    chrome.notifications.create(
      12,
      {
        type: 'basic',
        iconUrl: './img/kt48.png',
        title: '这是标题',
        message: '您刚才点击了自定义右键菜单！'
      },
      (res) => {
        console.log('res', res)
      }
    )
  }
})
