import React from 'react';
import {connect} from "react-redux";

import Button from "../../../../shared/components/Button";
import {openModalCreator} from "../../../../store/actionCreators/openModalCreator";

const HomePage = ({openModal})=> {
    return (
        <>
        <h1>Добро пожаловать в Ад для разработчиков! value !== value</h1>
        <Button onClick={openModal} text="Open Modal" />
        </>
    )
};

const mapDispatchToProps = (dispatch)=> {
    return {
        openModal: ()=> dispatch(openModalCreator())
    }
};

export default connect(null, mapDispatchToProps)(HomePage);