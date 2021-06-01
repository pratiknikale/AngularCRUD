const mongoose = require("mongoose");

var book = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  // ,
  // collection: 'books'
});

module.exports = mongoose.model("books", book);
