chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log(msg)
  if (msg.btnTxt == 'hello!') {
    sendResponse('Yeah!')
  } else if (msg.btnTxt == 'good!') {
    sendResponse('thank you!')
  }
})
