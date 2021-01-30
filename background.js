chrome.commands.onCommand.addListener(command => {
  if (command === "next") {
    chrome.tabs.query({ url: "https://*.youtube.com/*" }, (tabs) => {
      chrome.tabs.executeScript(tabs[0].id, { file: "foreground.js" });
    })
  }
});