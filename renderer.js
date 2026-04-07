const urlInput = document.getElementById("urlInput");
const webview = document.getElementById("browserView");
const goBtn = document.getElementById("goBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const reloadBtn = document.getElementById("reloadBtn");

function loadURL() {
  let url = urlInput.value.trim();

  if (!url) return;

  if (url.startsWith("http://") || url.startsWith("https://")) {
    webview.src = url;
  } else {
    webview.src = "https://www.google.com/search?q=" + encodeURIComponent(url);
  }
  }


goBtn.addEventListener("click", loadURL);

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loadURL();
});


// Navigation buttons
backBtn.addEventListener("click", () => {
  if (webview.canGoBack()) webview.goBack();
});

forwardBtn.addEventListener("click", () => {
  if (webview.canGoForward()) webview.goForward();
});

reloadBtn.addEventListener("click", () => {
  webview.reload();
});

// Update address bar when page changes
webview.addEventListener("did-navigate", (event) => {
  urlInput.value = event.url;
});

webview.addEventListener("did-navigate-in-page", (event) => {
  urlInput.value = event.url;
});