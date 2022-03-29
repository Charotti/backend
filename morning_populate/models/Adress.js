const mongoose = require("mongoose");
const adressesSchema = new mongoose.Schema({
  streetName: String,
  streetNumber: String,
});
const Adress = mongoose.model("Adress", adressesSchema);
module.exports = Adress;
