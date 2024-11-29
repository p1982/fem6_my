import React from 'react';
import {types} from "./types";

const Button = (props) => {
    const {text, type, className} = props;
    const fullClassName = `btn ${types[type]} ${className || ""}`;
    return <button className={fullClassName}>{text}</button>
}

export default Button;