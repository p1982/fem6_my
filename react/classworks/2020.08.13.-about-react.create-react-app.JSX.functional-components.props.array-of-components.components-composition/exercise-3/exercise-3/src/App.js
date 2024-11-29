import React from 'react';
import logo from './logo.svg';
import Main from './client/Main';
import Navbar from './client/Navbar/components/Navbar'
import './App.css';




function App(props) {
  return (
    <>
    <Navbar {...navbar}/>
    <Main />
    </>
  );
}

export default App;
