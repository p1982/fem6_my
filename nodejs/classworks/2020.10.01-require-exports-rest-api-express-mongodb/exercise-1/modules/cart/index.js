const {addItem, removeItem, increaseCount, decreaseCount} = require('./functions')
class Cart {
    constructor(productLists){
        this.productList = productList;
    }

    addItem(newProduct) {
        const newCart = addItem(this.productList, newProduct);
        this.productList = newCart
    }

    
};

module.exports = Cart;