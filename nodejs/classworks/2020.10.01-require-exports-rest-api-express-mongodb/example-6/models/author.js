const {model} = require("mongoose");

const authorSchema = require("../schemas/author");

module.exports = model("Author", authorSchema);