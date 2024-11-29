import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';

import currencyContext from "../../../../app/context/currency.context";

const name = 'lenovo';
let price = 3000;

const SingleProductPage = () =>{

    const {id} = useParams(); 
    const  {currencies} = useContext(currencyContext)
    const {rate} = currencies.find(({current}) => current===true)

    return(
        <div>
            <p>{name}</p>
            <p>{price*rate}</p>
        </div>
    )
}

export default SingleProductPage;