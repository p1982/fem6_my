import React from 'react';
import {connect}  from 'react-redux';

const NavbarUserProfile = ({name})=> {
    return <p>{name}</p>
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps, null)(NavbarUserProfile);