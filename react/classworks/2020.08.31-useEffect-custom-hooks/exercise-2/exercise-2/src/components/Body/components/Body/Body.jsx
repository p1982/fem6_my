import React, {useState, useEffect} from "react";
import Pagination from "../Pagination";
import WorkersList from "../WorkersList";

const Body = () => {
    const [workers, setWorkers] = useState([]);
    const [page, setPage] = useState(1)

    const handleClick = (currentPage) => {
        setPage(currentPage)
    };

    useEffect(()=>{
        fetch(`http://danit.com.ua/workers?page=${page}`)
            .then(res => res.json())
            .then(res => setWorkers(res))
    }, [page])

    return (
        <>
            <WorkersList list={workers}/>
            <Pagination handleClick={handleClick}/>
        </>
    )
}

export default Body