import React from 'react';

import List from "./client/List/components/List";

const list = [
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
      <List list={list} />
    </div>
  );
}

export default App;
