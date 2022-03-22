const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
const { Pool } = require("pg");
const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });

const app = express();
const transforName = (req, res, next) => {
  if (req.body.name) {
    req.body.name.toLowerCase();
  }
  next();
};

// debug middleware
const debug = (req, res, next) => {
  console.log("debug message");
  next();
};
app.use(debug);

// pour le body
app.use(express.json());
const superHeros = [
  {
    name: "Iron Man",
    power: ["money"],
    color: "red",
    isAlive: true,
    age: 46,
    image:
      "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart",
  },
  {
    name: "Thor",
    power: ["electricity", "worthy"],
    color: "blue",
    isAlive: true,
    age: 300,
    image:
      "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg",
  },
  {
    name: "Daredevil",
    power: ["blind"],
    color: "red",
    isAlive: false,
    age: 30,
    image:
      "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg",
  },
];
// route qui renvoie tous les superHeros
app.get("/heroes", async (_req, res) => {
  const hero = await Postgres.query("SELECT * FROM heroes;");
  res.json(hero.rows);
});

// route qui renvoie par le nom
app.get("/heroes/:name", async (_req, res) => {
  const hero = await Postgres.query("SELECT name FROM heroes");

  res.json(hero.rows);
});
// route pour trouver le pouvoir
app.get("/heroes/:name/power", async (_req, res) => {
  const hero = await Postgres.query("SELECT name, power FROM heroes");

  res.json(hero.rows);
});
// route hero ajouté
app.post("/heroes", async (req, res) => {
  try {
    await Postgres.query(
      "INSERT INTO heroes(name, power, color, isAlive, age, image) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        req.body.name,
        req.body.power,
        req.body.color,
        req.body.isAlive,
        req.body.age,
        req.body.image,
      ]
    );
  } catch (err) {
    return res.status(400).json({
      message: "An error happened. Bad data received.",
    });
  }
  res.json({ message: `hero ${req.body.name} added to the database ` });
});

// recopier patch

app.get("*", (_req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8000, () => console.log("Listening..."));
