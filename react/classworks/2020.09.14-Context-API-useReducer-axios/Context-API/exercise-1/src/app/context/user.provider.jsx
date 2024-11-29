import React from 'react';

import userContext from "./user.context";

const user = {
    name: "Аинз",
    middleName: "Оал",
    lastName: "Гоун"
};

const UserProvider = ({children}) => {
    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}

export default UserProvider;    