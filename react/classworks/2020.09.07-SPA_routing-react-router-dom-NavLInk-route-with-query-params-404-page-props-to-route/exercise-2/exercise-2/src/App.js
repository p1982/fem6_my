import React from 'react';

import{BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from "./client/Navbar/components/Navbar";
import HomePage from "./client/Home/pages/HomePage";
import PeopleListPage from './client/People/pages/PeopleListPage';
import SinglePeoplePage from './client/People/pages/SinglePeoplePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path ="/pirates" exact component = {PeopleListPage} />
      <Route path ="/pirates/:id" exact>
        <SinglePeoplePage />
        </Route>
    </Router>
    
      

  );
}

export default App;
