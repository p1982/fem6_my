import React, {Component} from 'react';
import './HeroesList.css'
import HeroesListItem from '../HeroesListItem'
import HeroesListCount from '../HeroesListCount'

import {v4} from "uuid";

class HeroesList extends Component {
    state = {
        heroesList: [
            {
            id: v4(),
            name: "Хоумлендер"
        },
        {
            id: v4(),
            name: "Королева Мэйв"
        },
        {
            id: v4(),
            name: "Поезд-А"
        },                
    ]
    };

    handleRemove = (index) => {
        this.setState(({heroesList}) => {
            const newHeroesList = [...heroesList]; 
            newHeroesList.splice(index, 1);
            return {
                heroesList: newHeroesList
            }
        })
    };

    render(){
        const {heroesList} = this.state;
        console.log(heroesList)
        const {handleRemove} = this;
        const namesList = heroesList.map((el, index) => 
            <HeroesListItem key={el.id} name={el.name} 
                handleRemove={() => handleRemove(index)} />);
        return (
            <div class="wrapper">
                <ul class="menu">
                    <div class="head">Семерка</div> 
                    <HeroesListCount count={heroesList.length}/>
                    <ul>
                        {namesList}

                    </ul>
                </ul>
            </div>
        )
    }
}

export default HeroesList