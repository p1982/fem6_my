import React from 'react';
import { Switch, Route} from 'react-router-dom';

import HomePage from './client/Home/pages/HomePage'
import AccountPage from './client/Account/pages/AccountPage'
import AboutPage from './client/About/pages/AboutPage'
import { PrivateRoute } from './shared/components/PrivateRoute/PrivateRoute';

export const AppRoutes = () => {
 
  return (
      <Switch>
        <Route path='/' exact >
            <HomePage/>
        </Route>
        <Route path='/about' exact >
            <AboutPage/>
        </Route>   
        <PrivateRoute 
        path='/my-account' 
        exact 
        auth={!!localStorage.getItem('token')}
        component={AccountPage}
        pathRedirect='/'
        />   
      </Switch>
  );
};
