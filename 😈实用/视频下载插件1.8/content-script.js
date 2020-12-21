function Func() {
	return new Promise((resolve, reject) => {
		// var a = document.querySelector("#player >script:nth-child(1)").innerHTML
		var a = document.querySelector("#player >script:nth-child(2)")
		if (!a) {
			a = document.querySelector("#player >script:nth-child(1)")
		}
		a = a.innerHTML
		a = `	var playerObjList = {};\n${a}`
		var c = a.match("flashvars_[0-9]{1,}")[0]
		eval(a)
		var d = eval(c)
		resolve(d)
		console.log(d)
	})
}

Func().then(res => {
	var videoType = []
	Object.keys(res['mediaDefinitions']).forEach((item) => {
		var itemInfo = res['mediaDefinitions'][item]
		if (itemInfo['format'] == 'mp4') {
			console.log(itemInfo)
			var obj = {
				key: itemInfo['quality'],
				val: itemInfo['videoUrl'],
				video_title:res.video_title
			}
			videoType.push(obj)
		}
	})
	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		if (request.cmd == 'test') 
			sendResponse(videoType);
	});
})



