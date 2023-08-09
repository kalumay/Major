import React, { useState } from 'react';
/*global chrome*/

function Home() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAnalysisClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error analyzing text:', error);
    }
  };

  const handlePopupToggle = () => {
    setPopupVisible(!popupVisible);
  };
  const handleDotClick = () => {
    chrome.runtime.sendMessage({ action: 'show_popup' });
  };

  return (
    <div className="Home">
      <h1>Hate and Toxic Text Detector</h1>
      <div className="textarea-wrapper">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text here"
        />
        <span
        className={`popup-dot ${popupVisible ? 'active' : ''}`}
        onClick={handlePopupToggle}
      >
        <button onClick={handleAnalysisClick}>Analyze</button>
      </span>
      {popupVisible && (
        <div className="popup-box">
          This is a popup box with additional information.
        </div>
      )}
        <div className="popup-button" onClick={handleDotClick}>
          Click Here
        </div>
      </div>
      
      <p>{result}</p>
    </div>
  );
}

export default Home;
