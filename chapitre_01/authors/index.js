const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Author = require("./models/authorModel");
// dotenv.config({
//   path: "./config.env",
// });
// const { Pool } = require("pg");
const app = express();
app.use(express.json());
const port = 8001;
// const Postgres = new Pool({ ssl: { rejectUnauthorized: false } });
mongoose
  .connect(
    "mongodb+srv://chariotte:ojUH2JABbP49KWX0@cluster0.zekqb.mongodb.net/konexio?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"));

const authors = [
  {
    name: "Lawrence Nowell",
    nationality: "UK",
    books: ["Beowulf"],
  },
  {
    name: "William Shakespeare",
    nationality: "UK",
    books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
  },
  {
    name: "Charles Dickens",
    nationality: "US",
    books: ["Oliver Twist", "A Christmas Carol"],
  },
  {
    name: "Oscar Wilde",
    nationality: "UK",
    books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"],
  },
];

// Exercice 1
// app.get("/", (req, res) => {
//   res.send("autors API");
// });
app.get("/", (_req, res) => {
  res.send("welcome");
});

// exercice 2
// app.get("/authors/:id", async (req, res) => {
//   const authors = await Postgres.query(
//     "SELECT author_name, nationality FROM authors WHERE authors.author_id=$1",
//     [req.params.id]
//   );
//   res.json(authors);
// });
// Avec Mongo
app.get("/authors", async (_req, res) => {
  const authors = await Author.find();
  res.json(authors);
});
app.get("/authors/:id", async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.json(author);
});

// exercice 3
app.get("/authors/:id/books", async (req, res) => {
  const books = await Postgres.query(
    " SELECT books FROM authors WHERE author_id=$1",
    [req.params.id]
  );
  res.json(books.rows);
});
// exercice 4
app.get("/json/authors/:authorId", (req, res) => {
  const author = authors[parseInt(req.params.authorId) - 1];

  if (!author) {
    return res.json({
      message: "author not found",
    });
  }
  res.json({ name: author.name, nationality: author.nationality });
  res.json({ books: author.books });
});

app.get("/authors/:authorId/books", (req, res) => {
  const author = authors[parseInt(req.params.authorId) - 1];
  if (!author) {
    return res.json({
      message: "author not found",
    });
  }
  res.json(author.books.join(","));
});
// toujours en bas de page
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
