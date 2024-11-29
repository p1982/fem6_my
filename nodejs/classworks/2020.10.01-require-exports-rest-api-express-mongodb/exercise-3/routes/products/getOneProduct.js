const productsList = require("../../utils/porducts-list")

const getOneProduct = (server) => {
    server.get('/products/:id', (req, res) => {
        const {id} = req.params
        res.json({
            status: "Success",
            result: productsList[id - 1]
        })
    })
}

module.exports = getOneProduct