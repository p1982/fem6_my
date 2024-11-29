import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const SinglePeoplePage = () => {

    const {id} = useParams()
    const[person, setPerson] = useState({});
    useEffect(() => {
        fetch(`http://danit.com.ua/pirates/${id}`)
        .then(response => response.json())
        .then(result => setPerson(result));
        }, []);
        const {name, fullDescription} = person;
    return(
        <>
        <h3>{name}</h3>
        <p>{fullDescription}</p>
        </>
    )
}

export default SinglePeoplePage