const productsList = require("../../utils/porducts-list")

const updateProduct = (server) => {
    server.put('/products/:id', (req, res) => {
        const {id} = req.params;
        productsList[id-1] = req.body.title;
        res.json({
            status: "Success",
            result: productsList[id-1]
        })
    })
}

module.exports = updateProduct