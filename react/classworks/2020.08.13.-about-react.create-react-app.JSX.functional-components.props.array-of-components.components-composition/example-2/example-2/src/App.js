import React from 'react';
import logo from './logo.svg';
import './App.css';

const headerTitle = "Заголовок страницы";
const now = new Date();
const hours = now.getHours();
const welcomeText = (hours <= 12) ? "Доброе утро" : "Добрый день";
const welcomeTextClassName = `welcome-text ${(hours <= 12) ? "morning" : "day"}`;
const nullVariable = null;
const nullUndefined = undefined;
const falseVariable = false;
const trueVariable = true;
const arrayVariable = ["Трисс", "Крисс", "Фор"];
const objectVariable = {
  name: "Дэймон",
  lastName: "Сальваторе"
};
const personsList = arrayVariable.map(item => <li>{item}</li>);
const element = 
  <>
  <label htmlFor="user-name">Имя пользователя</label>
  <input id="user-name" />
  <img />
<h2 tabIndex="12" className="header-title">{headerTitle}</h2>
<p className={`welcome-text ${(hours <= 12) ? "morning" : "day"}`}>
  {welcomeText} 
  {nullVariable}
  {nullUndefined}
  {falseVariable}
  {trueVariable}
  {/* {objectVariable} */}
  {objectVariable.name}
  </p>
  <ul>
  {personsList}
  </ul>
  </>;
/* React.createElement({
  "h2",
  props: {

  },
  children
})
*/
function App() {
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
