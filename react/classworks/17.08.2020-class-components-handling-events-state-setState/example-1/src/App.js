import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeText from "./components/WelcomeText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <WelcomeText />
      </header>
    </div>
  );
}

export default App;
