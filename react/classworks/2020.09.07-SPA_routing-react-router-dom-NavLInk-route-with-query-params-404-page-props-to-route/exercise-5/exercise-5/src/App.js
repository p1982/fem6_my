import React from 'react';
import Navbar from './components/Navbar/components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SinglePage from './components/SinglePage';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route path='/products' render={() => <SinglePage title='Products' description="Lorem ipsum product"/>} />
    <Route path='/about'>
      <SinglePage title='About' description="Lorem ipsum about"/>
    </Route>
    <Route path='/contacts'>
    <SinglePage title='Contacts' description="Lorem ipsum contacts"/>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
