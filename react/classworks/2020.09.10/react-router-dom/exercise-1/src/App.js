import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import HomePage from './client/Home/pages/HomePage'
import AccountPage from './client/Account/pages/AccountPage'



function App() {
  
  return(
    <BrowserRouter>
    <Switch>
      <Route path='/' exact >
          <HomePage/>
          </Route>
          <Route path='/my-account' exact >
            <AccountPage />
            
        </Route>
        
    </Switch>
  </BrowserRouter>

  )



}

export default App;
