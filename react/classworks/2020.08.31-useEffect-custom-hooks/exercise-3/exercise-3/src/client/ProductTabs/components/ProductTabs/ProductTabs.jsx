import React, {useState} from 'react'
import ProductTabItem from '../ProductTabItem/ProductTabItem'
import useTabs from '../../../../shared/hooks/useTabs/useTabs'

const ProductTabs = ({list}) => {
    
    const [tabs, setTabs, onToggle] = useTabs(list)

    const tabElements = tabs.map((item, index) => <ProductTabItem 
    {...item} 
    onClick={(e) => {
        e.preventDefault();
        onToggle(index);
    }
    }
    />)

    return(
        <ul class="accordion-tabs">
            {tabElements}
        </ul>
    )
}

export default ProductTabs