import React from 'react';
import logo from './logo.svg';
import './App.css';

import ErrorBoundary from "./components/ErrorBoundary";
import WorkerList from "./components/WorkerList";

console.log(ErrorBoundary)
// const workerListProps = ["Аня", "Света", "Оксана"]
const workerListProps = null;

function App() {
  return (
    <div className="App">
      <ErrorBoundary errorMsg="Список людей временно недоступен" >
        <WorkerList list={workerListProps} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
