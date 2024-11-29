const productsList = require("../../utils/porducts-list")

const createProduct = (server) => {
    server.post('/products', (req, res) => {
        const {title} = req.body
        productsList.push(title)
        res.json({
            status: "Success",
            result: productsList
        })
    })
}

module.exports = createProduct