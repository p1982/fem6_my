import Button from '../../../../shared/components/Button/Button'
import React from 'react';
import {actionOpenLoginModal} from "../../../../store/actions/"
import {connect}  from 'react-redux';

const NavbarUserProfile = ({name})=> {
    const content = name ? <p>{name}</p> : <Button text='Вход'/>
    return (
        <>
        {content}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: ()=> dispatch()
    }
}

export default connect(mapStateToProps, null)(NavbarUserProfile);