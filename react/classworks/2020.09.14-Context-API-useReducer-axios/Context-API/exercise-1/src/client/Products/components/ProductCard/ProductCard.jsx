import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import currencyContext from '../../../../app/context/currency.context'

const ProductCard = (props) =>{
    let  {name, price,  id} = props
    const  currency = useContext(currencyContext)
    if(currency === 'UAH'){
        price = price * 1
    }else if(currency === 'USD'){
        price = price / 27
    }
        
    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <Link to={`/products/${id}`} >Подробнее</Link>
        </div>
    )
}

export default ProductCard

