import React, { useState } from 'react';

const Popup = () => {
  const [data, setData] = useState<string>('');

  const fetchDataFromBackground = async () => {
    chrome.runtime.sendMessage({ action: 'getData' }, (response) => {
      setData(response.data);
    });
  };

  return (
    <div className="popup">
      <h1>Chrome Extension Popup</h1>
      <button onClick={fetchDataFromBackground}>Fetch Data</button>
      <p>Data: {data}</p>
    </div>
  );
};

export default Popup;
