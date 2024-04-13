// contentScript.js
document.addEventListener('mouseover', function (e) {
  // Highlight element logic here
});

document.addEventListener('click', function (e) {
  e.preventDefault();
  const selector = generateUniqueSelector(e.target);
  chrome.runtime.sendMessage({ type: 'captureSelector', selector: selector });
});

export const generateUniqueSelector = (element) => {
  // Generate and return a unique selector for 'element'
  console.log(element);
};
