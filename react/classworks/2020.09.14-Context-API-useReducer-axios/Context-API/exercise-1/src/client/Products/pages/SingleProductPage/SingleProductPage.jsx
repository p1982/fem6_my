import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';

import currencyContext from "../../../../app/context/currency.context";

const name = 'lenovo';
let price = 3000;

const SingleProductPage = () =>{

    const {id} = useParams(); 
    const currency = useContext(currencyContext);
    if(currency === "UAH") {
        price *= 1;
    }
    else if(currency === "USD") {
        price *= 0.038;
    }

    return(
        <div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default SingleProductPage;