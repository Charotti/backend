const express = require("express");
const app = express();
const port = 8000;
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
app.get("/", (req, res) => {
  res.send("autors API");
});

// exercice 2
app.get("/authors/:authorId", (req, res) => {
  const author = authors[parseInt(req.params.authorId) - 1];

  if (!author) {
    return res.json({
      message: "author not found",
    });
  }
  res.json(`${author.name}, ${author.nationality}`);
});
// exercice 3
app.get("/authors/:authorId/books", (req, res) => {
  const author = authors[parseInt(req.params.authorId) - 1];
  if (!author) {
    return res.json({
      message: "author not found",
    });
  }
  res.json(author.books.join(","));
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
