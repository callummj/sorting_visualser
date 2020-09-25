import React from 'react';

import './App.css';
import Toolbar from "./components/Toolbar";
import Visualiser from "./components/Visualiser";

function App() {

  return (
    <div className="App">
      <Toolbar/>
      <Visualiser/>
    </div>
  );
}

export default App;
