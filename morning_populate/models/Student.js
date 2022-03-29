const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  firstName: String,
  surName: String,
  adress: [{ type: mongoose.Types.ObjectId, ref: "adress" }],
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
