import React from 'react';
import "./ProductList.css";

import ProductListItem from "../ProductListItem";

const ProductList = ({list}) => {
    const listElements = list.map(item => <ProductListItem {...item} />);

    return (
        <div className="products-list">
            {listElements}
        </div>
    )
}

export default ProductList;