import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../../client/Home/pages/HomePage";
import CartPage from "../../client/Cart/pages/CartPage";
import MyAccountPage from "../../client/MyAccount/pages/MyAccountPage";

const AppRoutes = ({user}) => {
    return (
    <Switch>
        <Route exact path="/cart">
             <CartPage user={user} />      
        </Route>
        <Route exact path="/my-account">
             <MyAccountPage user={user} />      
        </Route>  
        <Route exact path="/">
             <HomePage user={user} />      
        </Route>              
    </Switch>
    )
}

export {AppRoutes};
