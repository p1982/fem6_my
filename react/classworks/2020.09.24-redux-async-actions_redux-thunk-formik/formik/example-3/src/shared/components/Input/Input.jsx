import React from 'react'

const Input = (props) => {
    const {label, onChange, ...inputProps} = props;
    const labelElement = (label) ? 
        <label>{label}</label> : "";
    return (
        <div className="formRow">
            {labelElement}
            <input {...inputProps}
            onChange={onChange}
            />
        </div>         
    )
};

export default Input;