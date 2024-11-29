const people = ["Александр"];
const getAllUsers = (app) => {
    app.get("/users", (req, res)=> {
        console.log(req.query)
        res.send({
            status: "Success",
            results: people
        })
    });
}

module.exports = getAllUsers;
