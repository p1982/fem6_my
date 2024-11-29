import React, {useContext} from 'react';

import userContext from "../../../../app/context/user.context";

const CartPage = () => {
    const {name, middleName, lastName} = useContext(userContext);
    return (
        <div className="container">
            <h1 className="text-center">Ваша корзина {name} {middleName} {lastName}</h1>;
        </div>
    )
}

export default CartPage;