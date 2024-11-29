import React from 'react';

const ProductsListItem = (props) => {
    const {name, onRemove} = props;
    return (
        <li>
             <div class="info">
             <h3>{name}</h3>
                  <span class="delete" onClick={onRemove}>X</span>
             </div>
         </li>
    )
}

export default ProductsListItem