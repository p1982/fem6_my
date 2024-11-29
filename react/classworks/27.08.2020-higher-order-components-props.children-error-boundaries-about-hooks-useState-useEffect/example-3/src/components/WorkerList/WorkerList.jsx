import React from 'react'

const WorkerList = ({list})=> {
    const listElements = list.map(text => <li>{text}</li>);
    return (
        <ul>
            {listElements}
        </ul>
    )
}

export default WorkerList;