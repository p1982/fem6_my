import React from 'react';
import ProductCard from '../../components/ProductCard'
import {products} from './products'


const ProductsListPage = () =>{
    const productsElements = products.map(item =>
    <ProductCard {...item}/>
    )
    return(
        <div className='products-list'>
            {productsElements}
        </div>


    )
}
export default ProductsListPage