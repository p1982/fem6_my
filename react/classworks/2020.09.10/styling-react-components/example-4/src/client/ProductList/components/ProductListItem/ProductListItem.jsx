import React from 'react';
import "./ProductListItem.css";

const ProductListItem = ({src, name}) => {
    return (
        <div className="products-list-item">
            <div>
                <img src={src} alt="#" className="product-list-item-img"/>
            </div>
            <h4 className="product-list-item-name">{name}</h4>
        </div>
    )
}

export default ProductListItem;