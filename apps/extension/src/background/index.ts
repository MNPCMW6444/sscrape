// src/background/index.ts
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension successfully installed!');
  // Perform on install actions, like setting up initial storage values.
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received', message);
  sendResponse({ reply: 'Message received' });
});
