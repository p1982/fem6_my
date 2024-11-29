import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroesList from './client/HeroesList/components/HeroesList';

const list = ['Хоумлендер', 'Старлайт', 'Королева Мэйв', 'Поезд-А', 'Бездна', 'Черный Нуар', 'Прозрачный'];

function App() {
  return (
    <HeroesList list={list} />
  );
}

export default App;
