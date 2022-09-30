import React, { useState } from "react";
import './style.css';

import FirstComponent from "./components/FirstComponents";
import SecondaryComponent from "./components/SecondaryComponents";

function App() {

  const [position, setPosition] = useState('A');

  const linkOnHandler = (event, pos) => {
    event.preventDefault();
    setPosition(pos);
  };

  return (
    <div className="App">
      <h1>React Navigasi Intro</h1>
      <span style={{  display: 'flex', gap:'0.5em' }}>
        <a href="#" onClick={(event => linkOnHandler(event, 'A'))}>Component A</a>
        <a href="#" onClick={(event => linkOnHandler(event, 'B'))}>Component B</a>
      </span>
      {position === 'A' ? <FirstComponent /> : <SecondaryComponent />}
    </div>
  );
}

export default App;
