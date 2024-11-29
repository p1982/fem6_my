const express = require('express')
const parser = require('body-parser')

const server = express()

server.use(parser.json());

const routes = require("./routes");
routes(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
})