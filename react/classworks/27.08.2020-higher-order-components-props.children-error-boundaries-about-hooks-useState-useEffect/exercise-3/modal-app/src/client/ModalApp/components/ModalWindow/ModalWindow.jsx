import React, {useState} from 'react';
import './ModalWindow.css'

const ModalWindow = (props) =>{
    const {onClick, open} = props;
    const className = open ? 'modal open' : 'modal'
    
    return(
        <div  className={className}>
            <p>Modal window text</p>
            <button className="modal-close" onClick={onClick}>&#10005;</button>
        </div>
    )
}
export default ModalWindow