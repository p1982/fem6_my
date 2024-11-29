import React, {useState, useEffect}  from 'react';
import "./CartoonItem.css";

const CartoonItem = ({name, shortDescription}) => {
     
    return (
        <div className='characters-item'>
            <h3 className='characters-item-name'>{name}</h3>
            <p className='characters-item-desc'>{shortDescription}</p>
        </div>
    )
}

export default CartoonItem;