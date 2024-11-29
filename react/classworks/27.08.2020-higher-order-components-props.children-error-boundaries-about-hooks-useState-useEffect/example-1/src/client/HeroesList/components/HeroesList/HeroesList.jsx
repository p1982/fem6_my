import React, {Component} from 'react';
import './HeroesList.css';

import withEditList from "../../../../shared/HOC/withEditList";

import HeroesListItem from '../HeroesListItem';
import HeroesListCount from '../HeroesListCount';

const HeroesList = (props) => {
    const {state: {list}, handleRemove} = props;

    const namesList = list.map((el, index) => 
        <HeroesListItem name={el} 
            handleRemove={() => handleRemove(index)} />);

    return (
        <div className="wrapper">
            <ul className="menu">
                <div className="head">Семерка</div> 
                <HeroesListCount count={list.length}/>
                <ul>
                    {namesList}
                </ul>
            </ul>
        </div>
    )
}

export default withEditList(HeroesList);