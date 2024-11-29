import React, {useContext} from 'react'

import currencyContext from '../../../app/context/currency.context'

const SelectCurrency = () => {
    const {currencies, func} = useContext(currencyContext)
    const optionsElements = currencies.map(({name, current}) => 
        <option value={name} selected={current}>{name}</option>);

    return (
        <select onChange={({target})=>func(target.value)}>
            {optionsElements}
        </select>
    )
}

export default SelectCurrency