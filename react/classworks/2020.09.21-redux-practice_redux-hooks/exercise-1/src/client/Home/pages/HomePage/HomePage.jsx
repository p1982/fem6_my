import React from 'react';
import {connect} from 'react-redux';

const HomePage = ({name})=> {
    const [userName] = name.split(' ');
    return (
        <>
        <h1>Добро пожаловать, господин {userName}!</h1>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
};

export default connect(mapStateToProps, null)(HomePage);