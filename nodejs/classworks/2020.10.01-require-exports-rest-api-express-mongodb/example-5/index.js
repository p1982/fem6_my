const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());

const routes = require("./routes");
/*
routes = (app)=> {
    getOneUser(app);
}
*/
routes(app);
app.listen(3000, ()=> console.log("Оно работает!"));