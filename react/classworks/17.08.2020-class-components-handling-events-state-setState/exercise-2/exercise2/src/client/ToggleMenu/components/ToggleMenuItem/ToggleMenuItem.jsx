import React from 'react'

 const ToggleMenuItem = (props) => {
     const {text, active, handleClick} = props;
    const activeClass = (active) ? "active" : "";
    
    return (<li className="toggle-menu-item">
                <a onClick = {handleClick} href="#" 
                className={`toggle-menu-link ${activeClass}`}>
                    {text}
                </a>
            </li>)
        
}

export default ToggleMenuItem

