const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Student = require("./models/Student");
const Adress = require("./models/Adress");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://chariotte:pwYl0AoO8LOHXB16@cluster0.sy5is.mongodb.net/mongoose_populate?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"));

app.post("/", async (req, res) => {
  let adressId;
  try {
    adressId = await Adress.create(req.body.adress);

    req.body.student.adress = adressId.id;
    console.log(req.body.student);
  } catch (err) {
    console.log(err);
    return res.status(400).send("error 400");
  }

  try {
    await Student.create(req.body.student);
  } catch (err) {
    console.log(err);
    return res.status(400).send("error");
  }
  res.status(201).json("created");
});

app.listen(8001, () => console.log("Listening..."));
