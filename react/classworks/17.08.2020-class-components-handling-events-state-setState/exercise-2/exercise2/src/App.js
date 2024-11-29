import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleMenu from './client/ToggleMenu/components/ToggleMenu'

const menuProps = ["item1", "item2","item3","item4","item5"]

function App() {
  return (
    <ToggleMenu menuList = {menuProps}/>
  )
}

export default App;
