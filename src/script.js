let redirectURL = ''

chrome.tabs.onActivated.addListener(function (tabId) {
  chrome.tabs.query({"active": true}, function (tab) {
    const encodedURL = encodeURIComponent(tab[0].url)
    redirectURL = 'https://url2qr.e-joint.jp/?url=' + encodedURL
  });
});

chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.create({url: redirectURL})
});
