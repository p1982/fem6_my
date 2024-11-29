import React from 'react';

const HeroesListItem = (props) => {
    const {name, handleRemove} = props;
    return (
        <li>
             <div class="info">
             <h3>{name}</h3>
                  <span class="delete" onClick={handleRemove}>X</span>
             </div>
         </li>
    )
}

export default HeroesListItem