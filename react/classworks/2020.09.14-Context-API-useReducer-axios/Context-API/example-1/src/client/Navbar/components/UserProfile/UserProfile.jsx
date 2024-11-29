import React from 'react';

import {Link} from "react-router-dom";

const UserProfile = ({user})=> {
    return <Link to="/my-account">{user}</Link>
}

export default UserProfile;