import React, {Component} from 'react';
import "./SimpleCart.css";

import SimpleCartItem from "../SimpleCartItem";

class SimpleCart extends Component  {
    state = {
        cart: []
    };

    onAddToCart = (product) => {
        const {cart} = this.state;
        const newProduct = cart.find(({name}) => name === product.name);
        if(!newProduct) {
            this.setState(({cart}) => {
                const newCart = cart.map(item => ({...item}));
                newCart.push(product);
                return {
                    cart: newCart
                }
            });
        }
    };

    onDeleteFromCart = (product) => {
        const {cart} = this.state;
        const idx = cart.findIndex(({name}) => name === product.name);
        if(idx !== -1) {
            this.setState(({cart}) => {
                const newCart = [...cart.slice(0, idx), ...cart.slice(idx+1)];
                /*
                const newCart = [...cart];
                newCart.splice(idx, 1);
                */
                return {
                    cart: newCart
                }
            });
        }
    };

    render() {
        const {title, products} = this.props;
        const {cart} = this.state;
        const {onAddToCart, onDeleteFromCart} = this;
        const productElements = products.map((item, index) => 
            <SimpleCartItem {...item} 
                onAddToCart={() => onAddToCart(item)}
                onDeleteFromCart={() => onDeleteFromCart(item)}
            />);
        return (
            <div className="products">
                <h3 className="products-title">{title}</h3>
                <ul className="simple-cart">
                    {productElements}
                </ul>
            <p>Вы выбрали: {cart.length} товаров.</p>
            </div>
        )
    }
}

export default SimpleCart;