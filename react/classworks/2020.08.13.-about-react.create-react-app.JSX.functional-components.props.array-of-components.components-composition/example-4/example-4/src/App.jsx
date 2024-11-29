import React from 'react';
import Header from "./client/Header/components/Header"
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
    siderbar: {

    },
    mainContent: {

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
    <Header {...header} />
  );
}

export default App;
