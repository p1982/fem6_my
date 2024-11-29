import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.scss';

import UserProvider from "../../context/user.provider";
import Navbar from '../../../client/Navbar/components/Navbar';
import {AppRoutes} from "../../routes/AppRoutes";
import CurrencyProvider from '../../context/currency.provider'

function App() {

  return (
    
    <CurrencyProvider>
      <UserProvider>
        <Router>
            <Navbar />
            <AppRoutes />
        </Router>
      </UserProvider>
    </CurrencyProvider>
  );
}

export default App;
