import React from "react";
import "./WorkersList.css";
import WorkersItem from "../WorkersItem";

const WorkersList = ({list}) => {

    const workersItems = list.map(item => <WorkersItem {...item}/>)
    return(
        <div className='workers-list'>
            {workersItems}
        </div>
    )
}

export default WorkersList