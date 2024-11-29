import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import currencyContext from '../../../../app/context/currency.context'

const ProductCard = (props) =>{
    let  {name, price,  id} = props
    const  {currencies} = useContext(currencyContext)
   const {rate} = currencies.find(({current}) => current===true)
        
    return(
        <div>
            <p>{name}</p>
            <p>{price*rate}</p>
            <Link to={`/products/${id}`} >Подробнее</Link>
        </div>
    )
}

export default ProductCard

