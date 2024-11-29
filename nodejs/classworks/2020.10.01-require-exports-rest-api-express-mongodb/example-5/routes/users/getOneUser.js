const getOneUser = (app) => {
    app.get("/users/:id", (req, res)=> {
        const {id} = req.params;
        res.send({
            status: "Success",
            results: people[id-1]
        })
    });
};

module.exports = getOneUser;