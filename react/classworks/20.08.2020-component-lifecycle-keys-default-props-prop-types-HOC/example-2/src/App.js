import React from 'react';
import Input from "./components/Input"
import logo from './logo.svg';
import './App.css';

function App() {
  const inputProps = {
    type: "email",

    placeholder: "Введите имя"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Input {...inputProps} />
      </header>
    </div>
  );
}

export default App;
