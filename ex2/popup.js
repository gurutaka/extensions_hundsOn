$('.btn').on('click', function() {
  chrome.runtime.sendMessage({ btnTxt: $(this).text() }, function(response) {
    console.log(response)
  })
})
