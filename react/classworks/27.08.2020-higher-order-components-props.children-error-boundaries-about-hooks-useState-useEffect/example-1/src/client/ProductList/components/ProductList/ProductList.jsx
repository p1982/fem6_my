import React from 'react'

import withEditList from "../../../../shared/HOC/withEditList";

const ProductList = (props) => {
    const {state: {list}, handleRemove} = props;

    const productElements = list.map((item, index) => <p>{item} 
        <span onClick={() => handleRemove(index)}>X</span></p>);

    return (
        <div className="product-list">
            {productElements}
        </div>
    )
}

export default withEditList(ProductList);