import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButton from "./components/ToggleButton";
import ToggleButtonHook from "./components/ToggleButtonHook";
import LoginFormHook from "./components/LoginFormHook";

function App() {
  return (
    <div className="App">
     <ToggleButton text="Click me" />
     <ToggleButtonHook text="Show me"/>
     <LoginFormHook onSubmit={login} />
    </div>
  );
}

function login({login, password}) {
  alert(`Позравляю, ${login}! Вы успешно авторизировались!`)
}

export default App;
