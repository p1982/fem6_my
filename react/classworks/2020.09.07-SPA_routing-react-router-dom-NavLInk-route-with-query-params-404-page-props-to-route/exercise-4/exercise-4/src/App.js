import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/Navbar/components/Navbar";
import HomePage from "./components/Home/pages/HomePage";
import Body from './components/Body/components/Body'


function App() {
  return (
    
    <Router>
      
    <div className="App">
      <Navbar />
    </div>
    <Switch >

  <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/workers" exact>
      <Body />
    </Route>
  <Route exact >К сожалению, Марио, твоя принцесса в другом замке</Route>
  </Switch>
  </Router>


  );
}

export default App;
