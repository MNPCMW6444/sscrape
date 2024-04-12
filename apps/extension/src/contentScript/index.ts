// src/contentScript/contentScript.ts
console.log('This content script has loaded!');
if (document.body) {
  document.body.style.backgroundColor = 'lightblue';
}

// Listening for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'changeColor') {
    document.body.style.backgroundColor = request.color;
    sendResponse({ status: 'Color changed' });
  }
});
