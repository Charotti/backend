const express = require("express");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
dotenv.config({
  path: "./config.env",
});
const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });

const students = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "M",
  },
  {
    id: 2,
    name: "Anita",
    age: 26,
    gender: "F",
  },
  {
    id: 3,
    name: "Djibril",
    age: 29,
    gender: "M",
  },
];
// page d'accueil
app.get("/", (_req, res) => {
  res.send("homepage");
});
// route vers la liste de tous les étudiants

app.get("/students", async (req, res) => {
  const student = await Postgres.query("SELECT * FROM students");
  res.json(student.rows);
});

// route pour le nom de l'étudiant dans le body

app.post("/students", async (req, res) => {
  try {
    await Postgres.query(
      "INSERT INTO students (student_name, age, gender) VALUES ($1, $2, $3)",
      [req.body.student_name, req.body.age, req.body.gender]
    );
  } catch (err) {
    return res.status(400).json({
      message: "An error happened. Bad data received.",
    });
  }
  res.json({ message: `Student ${req.body.name} added to the database` });
});

app.get("*", (_req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8000, () => {
  console.log("Listening");
});
