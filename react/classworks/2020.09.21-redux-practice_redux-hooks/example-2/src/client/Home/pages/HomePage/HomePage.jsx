import Button from "../../../../shared/components/Button";
import React from 'react';
import {openModalCreator} from "../../../../store/actionCreators/openModalCreator";
import {useDispatch} from "react-redux";

const HomePage = ()=> {
    const dispatch = useDispatch();
    const openModal = ()=> dispatch(openModalCreator());
    return (
        <>
        <h1>Добро пожаловать в Ад для разработчиков! value !== value</h1>
        <Button onClick={openModal} text="Open Modal" />
        </>
    )
};

export default HomePage;