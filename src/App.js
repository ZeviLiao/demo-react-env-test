import React from 'react';
// import logo from './logo.svg';
import './App.css';

import conf from './config'
function App() {
  return (
    <div className="App">
      <h1>
        {conf.hostEnv}
      </h1>
    </div>
  );
}

export default App;
