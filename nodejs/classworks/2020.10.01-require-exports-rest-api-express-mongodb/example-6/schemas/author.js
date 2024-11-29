const {Schema} = require("mongoose");
const bookSchema = require("./book");
const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    books: [bookSchema],
    email: {
        type: String,
        validate: {
            validator: function(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
          },
    },
    lastName: String,
    age: {
        type: Number,
        required: true
    }
});

module.exports = authorSchema;