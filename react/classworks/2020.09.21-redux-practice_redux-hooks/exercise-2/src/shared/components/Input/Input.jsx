import React from 'react';

const Input = (props) => {
    const {type='text', ...inputProps} = props;
    return <input {...inputProps} type={type} />
};

export default Input