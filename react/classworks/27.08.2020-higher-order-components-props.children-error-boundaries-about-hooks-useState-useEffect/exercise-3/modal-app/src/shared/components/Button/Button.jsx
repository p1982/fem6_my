import React from 'react';
import {buttonTypes} from './type'
import './Button.css';

const Button = (props) => {
    const {text, type, onClick} = props;
    const className = `btn ${buttonTypes[type]}`;

    return(
        <button onClick={onClick} 
            className={className}>{text}</button>
    )
}

export default Button

