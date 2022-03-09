const express = require("express");

const app = express();
const Joi = require("Joi");
const usersRouter = require("./router");

app.use(express.json());
app.use("/", usersRouter);

app.use("*", (err, req, res, next) => {
  res.send("errror");
});
app.listen(8000, () => {
  console.log("server started en port: ");
});
