import React from 'react';

const HeroesListItem = (props) => {
    const {name, handleRemove} = props;
    return (
        <li>
             <div className="info">
             <h3>{name}</h3>
                  <span className="delete" onClick={handleRemove}>X</span>
             </div>
         </li>
    )
}

export default HeroesListItem