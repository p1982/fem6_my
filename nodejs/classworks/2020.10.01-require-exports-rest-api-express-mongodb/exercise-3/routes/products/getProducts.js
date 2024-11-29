const productsList = require("../../utils/porducts-list")

const getProducts = (server) => {
    server.get('/products', (req, res) => {
        res.json({
            status: "Success",
            result: productsList
        })
    })
}

module.exports = getProducts