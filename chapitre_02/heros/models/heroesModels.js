const mongoose = require("mongoose");
const heroeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  color: {
    type: String,
  },
  power: {
    type: Array,
  },
  isAlive: {
    type: Boolean,
  },
  age: {
    type: String,
  },
});
const Hero = mongoose.model("Hero", heroeSchema);
module.exports = Hero;
