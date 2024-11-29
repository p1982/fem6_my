import React from 'react'

const Input = (props) =>{
    const {type = 'text', value= '', className = ""} = props;
    // const fullClassName = `form-control ${className || ""}`
    const fullClassName = `form-control ${className}`;
    const inputProps = {...props, type, value, className: fullClassName};
    // const inputProps = {
    //     // name: name
    //     name,
    //     type,
    //     placeholder,
    //     value,
    //     className: fullClassName

    // }
    return(
        <input {...inputProps}/>
    )
}

export default Input