import React, {useState, useEffect}  from 'react';
import "./CartoonList.css";
import CartoonItem from '../CartoonItem';

const url = 'http://danit.com.ua/pirates';

const CartoonList = () => {
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        fetch(url).
        then(response => response.json()).
        then(result => {
            const list = result.map(item => {
                const {name, shortDescription} = item;
                return {name, shortDescription};
            });
            setCharacters(list);
        })
    }, []);

const charactersElements = characters.map(item => <CartoonItem {...item}/>)
    return (
       <div className='characters-list'>
           {charactersElements}
       </div> 
    )
}

export default CartoonList;