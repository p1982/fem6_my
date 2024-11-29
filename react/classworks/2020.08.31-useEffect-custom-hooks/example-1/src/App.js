import React from 'react';
import logo from './logo.svg';
// import './App.css';
import GamesList from "./client/games/components/GamesList";

function App() {
  return (
    <div className="App">
      <GamesList title="Список игр" />
    </div>
  );
}

export default App;
