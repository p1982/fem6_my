import './App.css';
import AllPostsPage from "./client/Posts/pages/AllPostPage"
import React from 'react';
import {Provider} from 'react-redux'
import {store} from './store/store'

function App() {
  return (
    <Provider store={store}>
      <AllPostsPage />
    </Provider>
    
  );
}

export default App;
