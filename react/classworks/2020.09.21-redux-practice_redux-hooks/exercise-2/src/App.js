import './App.scss';

import HomePage from "./client/Home/pages/HomePage";
import Navbar from "./client/Navbar/components/Navbar";
import {Provider} from 'react-redux';
import React from 'react';
import store from  './store/store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
