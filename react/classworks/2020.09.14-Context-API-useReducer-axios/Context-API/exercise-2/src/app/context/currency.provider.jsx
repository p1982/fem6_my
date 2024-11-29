import React, { useState } from 'react';
import currencyContext from './currency.context'

const currenciesList = [
    {name: 'usd', rate: 0.038, current: false},
    {name: 'uah', rate: 1, current: true}
];

const CurrencyProvider = ({children}) =>{
    const [currencies, setCurrencies] = useState(currenciesList);

    const setCurrency = (value) =>{
        const newCurrencies = currencies.map(el => ({...el, current: el.name===value}))
        setCurrencies(newCurrencies)
    }

    return(
        <currencyContext.Provider value={{currencies, func: setCurrency}}>
            {children}
        </currencyContext.Provider>
    )
}

export default CurrencyProvider