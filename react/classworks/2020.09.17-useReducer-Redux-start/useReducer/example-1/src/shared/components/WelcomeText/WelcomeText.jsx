import React from 'react';

const WelcomeText = ({name, lastName, logOut})=> {
    return(
        <>
        <p>Добро пожаловать, {name} {lastName}!</p>
        <button onClick={logOut}>Выйти</button>
        </>
    )
}

export default WelcomeText;