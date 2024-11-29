import React from "react";
import PropTypes from "prop-types";

const Input = ({type, name, value, placeholder, required, className})=> {
    const FullClassName = `form-control ${className || ""}`;
    return <input className={FullClassName} type={type} name={name} 
    value={value} placeholder={placeholder} required={required} />
}

// const inputTypes = ["text", "email", "password"];

Input.defaultProps = {
    type: "text"
}

Input.propTypes = {
    /*
     type: (props, propName)=> {
         const value = props[propName];
         if(inputTypes.includes(value)) {
             return null;
         }
         else {
             return new Error("Тип input должен быть только text, email или password")
         }
     }
*/
    type: PropTypes.oneOf(['text', 'email', 'password']),
    name: PropTypes.string.isRequired,
    required: PropTypes.bool

}


export default Input;