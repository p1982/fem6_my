import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './client/Cards/components/Cards/Cards';
const products = [
  'Часы, "надеждные, как пружина от дивана"',
   'золотая цепь, "за которую не заплатили"',
   'полоченный Роллс-Ройс'
  ]

function App() {
  return (
    <div>
      <Cards products={products}/>
    </div>
  );
}

export default App;
