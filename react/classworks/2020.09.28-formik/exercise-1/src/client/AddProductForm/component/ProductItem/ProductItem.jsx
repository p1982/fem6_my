import React from 'react'
 const ProductItem = (props) => {

    const {
    name,
    code,
    price,
    category,
    discount,
    delivery,
    description
    } = props
    return (
    <tr>
            <td>{name}</td>
            <td>{code}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{discount}</td>
            <td>{delivery}</td>
            <td>{description}</td>
    </tr>

    )
 }
 export default ProductItem