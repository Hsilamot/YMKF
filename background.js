chrome.commands.onCommand.addListener(command => {
  if (command === "next") {
    chrome.tabs.query({ url: "https://*.youtube.com/*" }, (tabs) => {
      chrome.tabs.executeScript(tabs[0].id, { file: "foreground.js" });
    })
  }
  if (command === "previous") {
    chrome.tabs.query({ url: "https://*.youtube.com/*" }, (tabs) => {
      chrome.tabs.executeScript(tabs[0].id, { file: "previous.button.js" });
    })
  }
  if (command === "play/pause") {
    chrome.tabs.query({ url: "https://*.youtube.com/*" }, (tabs) => {
      chrome.tabs.executeScript(tabs[0].id, { file: "play.button.js" });
    })
  }
});