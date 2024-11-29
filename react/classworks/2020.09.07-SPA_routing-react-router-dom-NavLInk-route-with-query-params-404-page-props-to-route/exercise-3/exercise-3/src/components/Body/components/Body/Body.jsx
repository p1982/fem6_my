import React, {useState, useEffect} from "react";

import {useLocation} from "react-router-dom";

import Pagination from "../Pagination";
import WorkersList from "../WorkersList";

const Body = () => {
    const [workers, setWorkers] = useState([]);
    console.log(useLocation());
    const {search} = useLocation();
    const page = search.split("=")[1];
    useEffect(()=>{
        fetch(`http://danit.com.ua/workers?page=${page}`)
            .then(response => response.json())
            .then(setWorkers)
    }, [page])

    return (
        <>
            <WorkersList list={workers}/>
            <Pagination />
        </>
    )
}

export default Body