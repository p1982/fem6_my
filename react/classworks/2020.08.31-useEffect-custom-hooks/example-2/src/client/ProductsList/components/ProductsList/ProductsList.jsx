import React, {useState} from 'react'
import "./ProductsList.css";

import {useEditList} from "../../../../shared/hooks/useEditList";
import ProductsListItem from "../ProductsListItem";
import ProductsListCount from '../ProductsListCount';

const ProductsList = ({list}) => {
    const [products, setProducts, onRemove] = useEditList(list);

    const productsElements = products.map((item, index) => 
        <ProductsListItem name={item} 
            onRemove={() => onRemove(index)} />);

    return (
        <div className="wrapper">
            <ul className="menu">
                <div className="head">Список товаров</div> 
                <ProductsListCount count={products.length}/>
                <ul>
                    {productsElements}
                </ul>
            </ul>
        </div>
    ) 
}

export default ProductsList;