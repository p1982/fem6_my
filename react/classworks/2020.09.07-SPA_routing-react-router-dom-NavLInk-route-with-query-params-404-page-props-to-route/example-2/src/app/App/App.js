import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "../AppRoutes";
import Navbar from "../../components/Navbar";

function App() {
  return (
    <div>
    <Router>
       <Navbar />
       <AppRoutes />
     </Router>
    </div>
  );
}

export default App;
