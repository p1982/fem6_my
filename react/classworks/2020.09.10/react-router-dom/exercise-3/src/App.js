import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom";

import {AppRoutes} from "./AppRoutes";
import Navbar from './client/Navbar/components/Navbar/Navbar';

function App() {
  
  return(
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
    
  )
}

export default App;
