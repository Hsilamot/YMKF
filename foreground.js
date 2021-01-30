document.getElementsByClassName("ytp-next-button")[0].click();

chrome.storage.local.get(["shuffle"], (results) => {
  if (!results.shuffle) return;

  if (!document.querySelector("[aria-label=\"Shuffle playlist\"]").parentElement.classList.contains("style-default-active")) {
    document.querySelector("[aria-label=\"Shuffle playlist\"]").click();
  }
})
