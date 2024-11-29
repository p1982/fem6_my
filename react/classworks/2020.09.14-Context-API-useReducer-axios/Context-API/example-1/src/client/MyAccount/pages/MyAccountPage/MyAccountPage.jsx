import React from 'react'

const MyAccountPage = ({user}) => {
    return (
        <div className="container">
        <h1 className="text-center">Аккаунт {user}!</h1>;
    </div>
    )
}

export default MyAccountPage;