chrome.contextMenus.create({
  title: '测试右键菜单',
  onclick: function () {
    chrome.notifications.create(null, {
      type: 'basic',
      iconUrl: 'img/icon.png',
      title: '这是标题',
      message: '1122221您刚才点击了自定义右键菜单！'
    })
  }
})
