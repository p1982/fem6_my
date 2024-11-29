import React from 'react';
import "./Button.scss";

const Button = ({text, onClick})=> {
    return <button onClick={onClick} 
        className="btn">{text}</button>
}

export default Button;
