const {Schema} = require("mongoose")

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        matched: ""
    }
});

module.exports = bookSchema;