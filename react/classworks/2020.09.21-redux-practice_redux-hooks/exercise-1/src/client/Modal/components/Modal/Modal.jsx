import "./Modal.scss";

import Button from "../../../../shared/components/Button";
import React from 'react';

const Modal = ()=> {
    

    const style = {
        display: modalIsOpen ? "block" : "none"
    };

    return (
        <div className="modal" style={style}>
            <div className="modal-header">
                <h4 className="modal-header-text">My Modal</h4>
            </div>
            <div className="modal-body">
                <p className="modal-text">This is a modal</p>
            </div>
            <div className="modal-footer">
                <Button onClick={closeModal} text="Close" />
            </div>
        </div>        
    );
};

export default Modal;