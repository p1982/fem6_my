import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../../client/Home/pages/HomePage";
import CartPage from "../../client/Cart/pages/CartPage";
import ProductsListPage from "../../client/Products/pages/ProductsListPage/ProductsListPage";
import SingleProductPage from '../../client/Products/pages/SingleProductPage';

const AppRoutes = ({user}) => {
    return (
    <Switch>
        <Route exact path="/cart">
             <CartPage user={user} />      
        </Route>
        <Route exact path="/products">
             
             <ProductsListPage  />      
        </Route>  
        <Route exact path="/">
             <HomePage user={user} />      
        </Route>
        <Route exact path='/products/:id'>
             <SingleProductPage />
          </Route>              
    </Switch>
    )
}

export {AppRoutes};
