import React, {useState} from 'react'
import "./HeroesList.css";

import HeroesListItem from "../HeroesListItem";
import HeroesListCount from '../HeroesListCount';

const HeroesList = ({list}) => {
    const [heroes, setHeroes] = useState(list);

    const handleRemove = (idx) => {
        const newHeroes = [...heroes]; 
        newHeroes.splice(idx, 1);
        setHeroes(newHeroes);
    }; 

    const listElements = heroes.map((item, index) => 
        <HeroesListItem name={item} 
            handleRemove={() => handleRemove(index)} />);

    return (
        <div className="wrapper">
            <ul className="menu">
                <div className="head">Семерка</div> 
                <HeroesListCount count={heroes.length}/>
                <ul>
                    {listElements}
                </ul>
            </ul>
        </div>
    ) 
}

export default HeroesList;