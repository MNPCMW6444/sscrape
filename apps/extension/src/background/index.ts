// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'captureSelector') {
    // Save the selector and associated rule details
    saveRule(request.selector);
  }
});

function checkRules() {
  // Logic to fetch pages and check against saved rules
}

function saveRule(selector) {
  // Save the selector and other details to chrome.storage
}
