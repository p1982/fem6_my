import React from 'react';
import currencyContext from './currency.context'

const CurrencyProvider = ({children}) =>{
    return(
        <currencyContext.Provider value='USD'>
            {children}
        </currencyContext.Provider>
    )
}

export default CurrencyProvider