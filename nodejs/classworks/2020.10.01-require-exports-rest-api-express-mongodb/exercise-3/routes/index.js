const {getProducts, getOneProduct, getLimitProducts, createProduct} = require('./products');

module.exports = (server) => {
    getProducts(server);
    getLimitProducts(server);
    getOneProduct(server);
    createProduct(server);
}