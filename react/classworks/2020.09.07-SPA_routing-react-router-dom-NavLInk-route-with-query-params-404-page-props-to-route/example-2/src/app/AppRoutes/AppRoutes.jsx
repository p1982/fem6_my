import React from 'react';

import {Route, Switch} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ContactsPage from "../../pages/ContactsPage";

const AppRoutes = ()=> {
    return(
        <div className="container">
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/about">
                <AboutPage  />
            </Route>
            {/* <Route exact path="/people">
                <PeoplePage  />
            </Route>   
            <Route exact path="/people/:id">
                <SinglePeoplePage  />
            </Route>                        */}
            <Route exact path="/contacts" component={ContactsPage} />                      
            <Route >
                <Error />
            </Route>
            </Switch>   
        </div>
        
    )
}

const Error = () => {
    return <h2>Error</h2>
}

export default AppRoutes;