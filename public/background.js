chrome.runtime.onInstalled.addListener((detail) => {
    if ( detail.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.tabs.create({
        url: './index.html'
      });
    }
});
/*
export let expandView = () => {
  chrome.tabs.create({url: 'https://www.example.com'})
}

*/
