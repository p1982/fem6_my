import React from 'react'

const CartPage = ({user}) => {
    return (
        <div className="container">
            <h1 className="text-center">Ваша корзина, {user}!</h1>;
        </div>
    )
    
    
}

export default CartPage;