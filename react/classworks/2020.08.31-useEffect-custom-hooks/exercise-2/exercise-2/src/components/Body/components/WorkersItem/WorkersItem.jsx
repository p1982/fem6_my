import React from "react";

const WorkersItem = (props) => {
    const {name, job,} = props
    return (
        <div className='worker'>
            <p className='worker-name'>{name}</p>
            <p className='worker-job'>{job}</p>
        </div>
    )
}

export default WorkersItem