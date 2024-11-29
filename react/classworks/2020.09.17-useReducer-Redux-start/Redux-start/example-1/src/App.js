import React from 'react';
import {Provider} from "react-redux";

import logo from './logo.svg';
import './App.scss';

import Navbar from "./client/Navbar/components/Navbar";
import HomePage from "./client/Home/pages/HomePage";
import Modal from "./client/Modal/components/Modal";

import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <HomePage />
        <Modal />
      </div>
    </Provider>
  );
}

export default App;
