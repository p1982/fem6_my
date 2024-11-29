import React from 'react';
import ToggleMenu from "./client/ToggleMenu/components/ToggleMenu";
import logo from './logo.svg';
import './App.css';

const toggleMenuProps = {
  menuItems: [
    {
      text: "Item 1",
      href: "#",
      id: 1
    },
    {
      text: "Item 2",
      href: "#",
      id: 2
    },
    {
      text: "Item 3",
      href: "#",
      id: 3
    },
    {
      text: "Item 4",
      href: "#",
      id: 4
    },
    {
      text: "Item 5",
      href: "#",
      id: 5
    },
    {
      text: "Item 6",
      href: "#",
      id: 6
    },
    {
      text: "Item 7",
      href: "#",
      id: 7
    }
  ]
};

const toggleMenuProps2 = {
  menuItems: [
    {
      text: "Пункт 1",
      href: "#",
      id: 1
    },
    {
      text: "Пункт 2",
      href: "#",
      id: 2
    },
    {
      text: "Пункт 3",
      href: "#",
      id: 3
    },
    {
      text: "Пункт 4",
      href: "#",
      id: 4
    },
    {
      text: "Пункт 5",
      href: "#",
      id: 5
    },
    {
      text: "Пункт 6",
      href: "#",
      id: 6
    },
    {
      text: "Пункт 7",
      href: "#",
      id: 7
    }
  ]
};

function App() {
  return (
    <div className="App">
      <ToggleMenu {...toggleMenuProps} />
      <ToggleMenu {...toggleMenuProps2} />
    </div>
  );
}

export default App;
