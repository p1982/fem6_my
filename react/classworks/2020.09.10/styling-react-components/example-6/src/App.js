import React from 'react';
import logo from './logo.svg';
import './App.css';

import Portfolio from "./client/Portfolio/components/Portfolio";

const portfolio = [
  {
    name: "Fresh vegetables",
    src: "http://lorempixel.com/140/140?id=0"
  },
  {
    name: "Man",
    src: "http://lorempixel.com/140/140?id=1"
  }, 
  {
    name: "Picture",
    src: "http://lorempixel.com/140/140?id=2"
  },    
  {
    name: "Fire",
    src: "http://lorempixel.com/140/140?id=3"
  },   
];

function App() {
  return (
    <div className="container">
      <Portfolio list={portfolio} />
    </div>
  );
}

export default App;
