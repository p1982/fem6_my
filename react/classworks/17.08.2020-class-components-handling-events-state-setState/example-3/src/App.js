import React from 'react';
import logo from './logo.svg';
import './App.css';

import SimpleCart from "./client/SimpleCart/components/SimpleCart";

const products = [
  {
    name: "Валирийский меч",
    price: 12000
  },
  {
    name: "Меч Элотара",
    price: 8600
  },
  {
    name: "Корона Гондора",
    price: 2400
  },
  {
    name: "Посох Гэндальфа",
    price: 5400
  },
  {
    name: "Мифриловая кольчуга",
    price: 18000
  }
];

function App() {
  return (
    <div className="App">
      <SimpleCart products={products} title="Для ролевых игр" />
    </div>
  );
}

export default App;
