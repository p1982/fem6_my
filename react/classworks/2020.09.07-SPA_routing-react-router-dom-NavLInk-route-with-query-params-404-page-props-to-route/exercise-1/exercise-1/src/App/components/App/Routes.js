import React from 'react';
import {Route} from "react-router-dom";
import HomePage from '../../../Client/Home/pages/HomePage';
import ProductsPage from '../../../Client/Products/pages/ProductsPage'
import ProductsFromPartnersPage from '../../../Client/Products/pages/ProductsFromPartnersPage'
import ContactsPage from '../../../Client/Contacts/pages/ContactsPage'

const Routes = () => {
    return (
        <>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/products'>
            <ProductsPage />
        </Route>
        <Route exact path='/products-partners' component={ProductsFromPartnersPage} />
        <Route exact path='/contacts' component={ContactsPage} />
        </>
    )
}
export default Routes;