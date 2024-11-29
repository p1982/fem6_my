import React from 'react';
import logo from './logo.svg';
import './App.css';

import SelectedParagraph from "./components/SelectedParagraph";

function App() {
  return (
    <div className="App">
        <SelectedParagraph text="Доброе утро, мистер Андерсон!" />
    </div>
  );
}

export default App;
