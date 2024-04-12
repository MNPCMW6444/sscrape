import React, { useEffect, useState } from 'react';

const Options = () => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    // Load the stored color setting
    chrome.storage.sync.get('color', (result) => {
      setColor(result.color || 'defaultColor');
    });
  }, []);

  const updateColor = (newColor: string) => {
    chrome.storage.sync.set({ color: newColor }, () => {
      setColor(newColor);
    });
  };

  return (
    <div>
      <h1>Options for Chrome Extension</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => updateColor(e.target.value)}
      />
    </div>
  );
};

export default Options;
