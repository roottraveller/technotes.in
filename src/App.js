import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>technote.in</h1>
      </header>
      <div className="Main-container">
        <div className="Side-panel">
          <ul>
            <li>heading-text1</li>
            <li>heading-text2</li>
            <li>heading-text3</li>
          </ul>
        </div>
        <div className="Main-content">
          {/* Your main text and image section goes here */}
        </div>
      </div>
    </div>
  );
}

export default App;
