const addUser = (app)=> {
    app.post("/users", (req, res)=> {
        people.push(req.body.name);
        res.send({
            status: "Success",
            results: people
        }) 
    });
}

module.exports = addUser;


