import React from 'react';
import "./HeaderLogo.css";

const HeaderLogo = (props) => {
    const {text, href} = props;
    return (
        <a href={href} className="header-logo">
          <h2 className="header-logo-text">
              {text}
        </h2>
        </a>
    )
};

export default HeaderLogo;