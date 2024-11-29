import React, {useContext} from 'react';
import {Link} from "react-router-dom";


import userContext from "../../../../app/context/user.context";

const UserProfile = ()=> {
    const {name, middleName, lastName} = useContext(userContext);
    return <Link to="/my-account">{name} {middleName} {lastName}</Link>
}

export default UserProfile;