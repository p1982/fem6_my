import React from 'react';
import logo from './logo.svg';
import './App.css';

import EditableParagraph from "./shared/components/EditableParagraph";

function App() {
  return (
    <div className="App">
      <EditableParagraph text="У самурая нет цели - только путь" />
    </div>
  );
}

export default App;
