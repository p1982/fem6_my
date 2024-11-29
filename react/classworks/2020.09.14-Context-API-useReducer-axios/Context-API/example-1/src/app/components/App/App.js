import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.scss';
import Navbar from '../../../client/Navbar/components/Navbar';
import {AppRoutes} from "../../routes/AppRoutes";

const user = "Аинз Оал Гоун";

function App() {

  return (
    <Router>
    <div className="App">
       <Navbar user={user} />
       <AppRoutes user={user} />
    </div>
    </Router>
  );
}

export default App;
