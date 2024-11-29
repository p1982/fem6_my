import './App.css';

import {Provider} from "react-redux";
import React from 'react';
import ToDoList from "./client/ToDoList/components/ToDoList"
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoList />
      </div>
    </Provider>

  );
}

export default App;
