import React, {Component} from 'react';
import './HeroesList.css'
import HeroesListItem from './HeroesListItem'
import HeroesListCount from './HeroesListCount'

class HeroesList extends Component {
    state = {
        heroesList: ['Хоумлендер', 'Старлайт', 'Королева Мэйв', 'Поезд-А', 'Бездна', 'Черный Нуар', 'Прозрачный'],
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
        const {handleRemove} = this;
        const namesList = heroesList.map((el, index) => 
            <HeroesListItem name={el} 
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