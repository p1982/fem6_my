import "./Modal.scss";

import {shallowEqual, useDispatch, useSelector} from "react-redux";

import Button from "../../../../shared/components/Button";
import React from 'react';
import {closeModalCreator} from "../../../../store/actionCreators/closeModalCreator";

const Modal = ()=> {

    const modalIsOpen = useSelector(state => state.modalIsOpen, shallowEqual);
    const dispatch = useDispatch();
    const closeModal = () => dispatch(closeModalCreator());

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