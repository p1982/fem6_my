import React from 'react';
import {connect} from "react-redux";
import "./Modal.scss";

import Button from "../../../../shared/components/Button";
import {closeModalCreator} from "../../../../store/actionCreators/closeModalCreator";

const Modal = ({modalIsOpen, closeModal})=> {
    
    // const {modalIsOpen} = store.getState();

    const style = {
        display: modalIsOpen ? "block" : "none"
    };
    // store.subscribe(()=> console.log(store.getState()))
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

const mapStateToProps = (state)=> {
    return {
        modalIsOpen: state.modalIsOpen
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        closeModal: ()=> dispatch(closeModalCreator())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);