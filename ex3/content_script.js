chrome.runtime.onMessage.addListener(function(msg) {
  $("body").css("background-color", msg.color);
});
