import React from 'react';
import Input from "./components/Input"
import {ValidationInput} from "./components/ValidationInput"
import logo from './logo.svg';
import './App.css';

function App() {
  const inputProps = {
    name: "user-name",
    placeholder: "Введите имя"
  }
  return (
    <div className="App">
      <header className="App-header">
        <Input {...inputProps} />
        <ValidationInput {...inputProps} />
      </header>
    </div>
  );
}

export default App;
