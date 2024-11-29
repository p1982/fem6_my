const productsList = require("../../utils/porducts-list")

const getLimitProducts = (server) => {
    server.get('/products', (req, res) => {
        const {title} = req.query
        const newList = productsList.filter((item) => item === title)
        res.json({
            status: "Success",
            result: newList
        })
    })
}

module.exports = getLimitProducts