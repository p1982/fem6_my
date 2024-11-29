import React from 'react';
import "./WelcomeText.css";

const WelcomeText = () => {
    const now = new Date();
    const text = (now.getHours() < 12) ? "Доброе утро!" : "Добрый день!";
    
    return <p className="welcome-text">{text}</p>;
}

export default WelcomeText;