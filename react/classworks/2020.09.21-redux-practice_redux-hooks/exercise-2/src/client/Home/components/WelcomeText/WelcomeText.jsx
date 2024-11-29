import React from 'react';

const WelcomeText = ({name}) => {
    const [userName] = name.split(' ');
    return (
        <>
        <h1>Добро пожаловать, господин {userName}!</h1>
        </>
    )
};
export default WelcomeText