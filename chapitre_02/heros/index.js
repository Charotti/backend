const express = require("express");
const app = express();

app.get("*", (_req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8000, () => console.log("Listening..."));
