import React from 'react';
import logo from './logo.svg';
import './App.css';

import HeroesList from  "./client/HeroesList/components/HeroesList";
import ProductList from './client/ProductsList/components/ProductsList';

const heroesList = ['Хоумлендер', 'Старлайт', 'Королева Мэйв', 'Поезд-А', 'Бездна', 'Черный Нуар', 'Прозрачный'];
const productList = ['Телевизор', 'Котик', 'Метафора о любви'];

function App() {
  return (
    <>
    <HeroesList list={heroesList} />
    <ProductList list={productList} />
    </>
  );
}

export default App;
