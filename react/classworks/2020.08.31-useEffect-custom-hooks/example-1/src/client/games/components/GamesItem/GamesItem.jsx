import React from 'react';
import "./GamesItem.css";

const GamesItem = ({name, background_image})=> {
    return (
        <div className="games-item">
            <h3 className="game-item-name">{name}</h3>
            <img className="games-item-img" src={background_image} alt="#"/>
        </div>
    )
}

export default GamesItem;