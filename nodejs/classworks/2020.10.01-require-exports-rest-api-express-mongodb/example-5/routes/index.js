const {getOneUser, getAllUsers, addUser} = require("./users");

module.exports = (app)=> {
    getOneUser(app);
    getAllUsers(app);
    addUser(app);
};