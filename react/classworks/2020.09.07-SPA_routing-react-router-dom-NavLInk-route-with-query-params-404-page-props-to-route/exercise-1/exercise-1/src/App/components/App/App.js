import React from 'react';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';

import Navbar from '../../../Client/Navbar/components/Navbar'
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  )
}

export default App;
