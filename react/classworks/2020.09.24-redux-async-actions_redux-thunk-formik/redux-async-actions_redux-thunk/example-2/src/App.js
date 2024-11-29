import './App.css';

import {Provider} from "react-redux";
import React from 'react';
import User from "./client/Users/pages/User";
import store from "./store/store";

// const getInfo = async ()=> {
//   const response = await fetch(`http://danit.com.ua/pirates/1`)
//   const result = await response.json();  
//   console.log(result)
//   return result;
// }

// const user = getInfo();
// console.log(user)


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <User />
    </div>
    </Provider>
  );
}

export default App;
