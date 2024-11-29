import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const PeopleListPage =() =>{
    const[peopleList, setPeopleList] = useState([]);
    
    useEffect(() => {
        fetch('http://danit.com.ua/pirates')
        .then(response => response.json())
        .then(result => setPeopleList(result));
        }, []);
    const peopleListEl = peopleList.map(({name}, index) => 
        <li><Link to ={`/pirates/${index+1}`}>{name}</Link></li>);

    return (
        <>
        <h2>Список людей</h2>
        <ul>
            {peopleListEl}
        </ul>
        </>
    )
}

export default PeopleListPage