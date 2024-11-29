import React, {useState} from 'react';
import "./ToggleButtonHook.css";

const ToggleButtonHook = ({text}) => {
    const [active, setActive] = useState(false);

    const onToggle = () => {
        setActive(!active);
    };

    const className = (active) ? "btn active" : "btn";

    return <button onClick={onToggle} className={className}>{text}</button>
}

export default ToggleButtonHook;