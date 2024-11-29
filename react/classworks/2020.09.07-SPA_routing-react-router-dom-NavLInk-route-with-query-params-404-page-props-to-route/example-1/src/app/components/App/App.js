import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "../../../client/Navbar/components/Navbar";

import HomePage from "../../../client/Home/pages/HomePage";
import AboutPage from "../../../client/About/pages/aboutPage";
import ContactsPage from "../../../client/Contacts/pages/ContactsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/about" component={AboutPage} />
        <Route path="/contacts" component={ContactsPage} />      
      </div>
    </Router>
  );
}

export default App;
