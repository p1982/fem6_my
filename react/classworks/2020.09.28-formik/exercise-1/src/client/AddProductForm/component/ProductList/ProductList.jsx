import React from 'react'
import ProductItem from '../ProductItem';

 const ProductList = ({products}) => {
     const productElem = products.map((item)=><ProductItem {...item}/>)
    return (
    <table>
        <th>
            <td>Name</td>
            <td>Code</td>
            <td>Price</td>
            <td>Category</td>
            <td>Discount</td>
            <td>Delivery</td>
            <td>Description</td>
            </th>
        <tbody>{productElem}
        </tbody>
     </table>
    )
 }
 export default ProductList