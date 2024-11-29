import React from 'react'

const SimpeCartItem = ({name, price, onAddToCart, onDeleteFromCart}) => {
    return (
        <li className="simple-cart-item">
            {name}. Цена: {[price]}. 
            <a href="#" onClick={onAddToCart}
                className="simple-cart-action add">Add</a>
            <a href="#" onClick={onDeleteFromCart}
                className="simple-cart-action remove">X</a>             
        </li>
    )
}

export default SimpeCartItem;