import React from 'react';

const Input = (props) => {
    const {type = "text", label, ...inputProps} = props;
    const labelElement = label ? <label>{label}</label> : "";
    return (
        <>
        {labelElement}
        <input {...inputProps} type={type} />
        </>
    )
};

export default Input;