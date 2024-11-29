import LoginForm from '../../../LoginForm/component/LoginForm';
import React from 'react';
import WelcomeText from '../../components/WelcomeText/WelcomeText'
import {connect} from 'react-redux';

const HomePage = ({name})=> {
    const content = name ? <WelcomeText name={name}/> : <LoginForm />
    return (
        <>
        {content}
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
};

export default connect(mapStateToProps, null)(HomePage);