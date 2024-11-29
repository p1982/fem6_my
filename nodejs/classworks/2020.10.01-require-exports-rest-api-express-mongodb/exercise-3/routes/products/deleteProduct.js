const productsList = require("../../utils/porducts-list")

const deleteProduct = (server) => {
    server.delete('/products/:id', (req, res) => {
        const {id} = req.params;
        productList.splice(id-1, 1);
        res.json({
            status: "Success"
        })
    })
}

module.exports = deleteProduct