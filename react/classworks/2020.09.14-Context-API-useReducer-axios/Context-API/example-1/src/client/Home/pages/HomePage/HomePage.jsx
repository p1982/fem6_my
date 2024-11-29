import React from 'react'

const HomePage = ({user}) => {
    return (
        <div className="container">
            <h1 className="text-center">Добро пожаловать, {user}!</h1>;
        </div>
    )
}

export default HomePage;