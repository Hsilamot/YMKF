chrome.storage.local.get(["shuffle"], (result) => {
  document.getElementById("shuffle").checked = result.shuffle;
})

document.getElementById("save").addEventListener("click", () => {
  if (document.getElementById("shuffle").checked === chrome.storage.local.get(["shuffle"])) return;

  chrome.storage.local.set({ shuffle: document.getElementById("shuffle").checked }, () => {
    const status = document.getElementById("save")

    status.textContent = "Saved!"
    setTimeout(() => status.textContent = "Save", 3000);
  });
})