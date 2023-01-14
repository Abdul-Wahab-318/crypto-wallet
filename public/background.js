chrome.runtime.onInstalled.addListener((detail) => {
    if ( detail.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.tabs.create({
        url: './index.html'
      });
    }
});

