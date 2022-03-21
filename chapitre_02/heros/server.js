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
  const hero = await Postgres.query("SELECT * FROM heroes");
  res.json(hero.rows);
});

// route qui renvoie par le nom
app.get("/heros/:name", (req, res) => {
  const hero = superHeros.find((hero) => {
    return (
      hero.name.toLowerCase().replace("", "_") ===
      req.params.name.toLowerCase().replace("", "_")
    );
  });
  res.send(hero);
});
// route pour trouver le pouvoir
app.get("/heros/:name/powers", (req, res) => {
  const hero = superHeros.find((hero) => {
    return (
      hero.name.toLowerCase().replace("", "_") ===
      req.params.name.toLowerCase().replace("", "_")
    );
  });
  res.send(hero.power);
});
// route hero ajouté
app.post("/heros", transforName, (req, res) => {
  res.send("ok hero ajouté");
});

// recopier patch

app.get("*", (_req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8000, () => console.log("Listening..."));
