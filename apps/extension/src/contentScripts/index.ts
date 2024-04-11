
declare  {

}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Content script loaded.');
  console.log('Current URL:', window.location.href);

  // Example of modifying the DOM: Adding a simple message at the top of the page
  const messageElement = document.createElement('div');
  messageElement.style.position = 'fixed';
  messageElement.style.top = '0';
  messageElement.style.left = '0';
  messageElement.style.backgroundColor = 'yellow';
  messageElement.style.color = 'black';
  messageElement.style.zIndex = '10000';
  messageElement.style.padding = '8px';
  messageElement.textContent = 'This is your content script speaking!';
  document.body.prepend(messageElement);

  // Example of sending a message to the background script
  chrome.runtime.sendMessage(
    { greeting: 'hello from content script' },
    function (response) {
      console.log(response.farewell);
    },
  );
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.greeting === 'hello from background') {
    console.log('Received hello from background script');
    sendResponse({ farewell: 'goodbye from content script' });
  }
  return true; // Required to indicate we want to send a response asynchronously
});
