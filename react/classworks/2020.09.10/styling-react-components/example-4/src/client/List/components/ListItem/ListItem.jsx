import React from 'react';
import "./ListItem.css";

const ListItem = ({src, name}) => {
    return (
        <div className="products-list-item">
            <img src={src} alt="#" className="product-list-item-img"/>
            <h4 className="product-list-item-name">{name}</h4>
        </div>
    )
}

export default ListItem;