import React from 'react';
import Header from "./client/Header/components/Header"
import Main from "./client/Main/components/Main";
import logo from './logo.svg';
import './App.css';

const pageProps = {
  header: {
    headerLogo: {
      text: "Ramda.js",
      href: "#"
    },
    headerMenu: {
        menuList: [
            "Functional Programming",
            "Ramda",
            "Fantasy Land Spec",
            "Node.js for all"
        ]
    }
  },
  main: {
    sidebar: {
      sidebarMenu:[ {
        text: "Ramda",
        href: "#1"
      },
      {
        text: "Why Ramda?",
        href: "#2"
      },
      {
        text: "What's Different?",
        href: "#3"
      },
      {
        text: "Introductions",
        href: "#4"
      },
      {
        text: "Philosophy",
        href: "#5"
      },
      ]
    },
    mainContent: {
      text: ["Lorem ipsum — классическая панграмма, условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы. Используется в качестве заполнителя по крайней мере с XVI века. Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."],
      imgSrc: '#'
    }
  },
  footer: {
    footerMenu: {

    },
    copyright: {
      text: ""
    }
  }
};

function App() {
  const {header, main, footer} = pageProps;
  return (
    <>
    <Header {...header} />
    <Main {...main}/>
    </>
  );
}

export default App;
