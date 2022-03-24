const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
});
const Student = mongoose.model("Students", studentSchema);
module.exports = Student;
