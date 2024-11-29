import React from 'react'

const Logo = (props)=> {
    const {text} = props;
    return (
        <a href="/" className="logo">
        <span className="logo-text">{text}</span>
        </a>
    )
}

export default Logo;