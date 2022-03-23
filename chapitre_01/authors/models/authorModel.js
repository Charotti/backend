const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  nationality: {
    type: String,
  },
  books: {
    type: Array,
  },
  lastConnection: Date,
  orders: Number,
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
