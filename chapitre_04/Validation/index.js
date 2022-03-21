const express = require("express");

const app = express();
const Joi = require("Joi");
const usersRouter = require("./router");
// Lire le body dans les post
app.use(express.json());
app.use("/", usersRouter);

app.use("*", (err, req, res, next) => {
  res.send("error");
});
app.listen(8000, () => {
  console.log("server started en port: ");
});
