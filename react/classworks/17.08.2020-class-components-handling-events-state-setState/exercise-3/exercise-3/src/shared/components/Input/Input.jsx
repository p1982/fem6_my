import React from 'react'

const Input = (props) => {
    const {type = "text", value, name, placeholder, className, handleChange} = props;
    const fullClassName = `form-control ${className || ""}`;
    return <input type={type} value={value} 
            name={name} placeholder={placeholder} className={fullClassName}
            onChange={handleChange} />

};

export default Input;