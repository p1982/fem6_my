import React from "react";

const Input = ({type, name, value, placeholder, required, className})=> {
    const fullClassName = `form-control ${className || ""}`;
    return <input className={fullClassName} type={type} name={name} 
    value={value} placeholder={placeholder} required={required} />
}

Input.defaultProps = {
    type: "text",
    required: false
}


export default Input;