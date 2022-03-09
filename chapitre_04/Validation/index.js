const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
const Joi = require("Joi");

const schema = Joi.object({
  userName: Joi.string().min(4).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  age: Joi.number().min(10).max(99).required(),
  city: Joi.string().required(),
});
const users = [
  {
    userName: "Caroline",
    email: "caroline@gmail.com",
    age: 25,
    city: "Carennac",
  },
];

// ROUTES

app.get("/", (_req, res) => {
  res.json(users);
});
app.post("/", (req, res) => {
  const user = req.body;

  const validationResult = schema.validate(user);

  if (validationResult.error) {
    return res.status(400).json({
      message: validationResult.error,
    });
  }
  users.push(user);
  res.json({ message: "User has been added", users });
});
// router.get("/users/:userName", (req, res) => {
//     res.send
// })

app.listen(8000, () => {
  console.log("server started en port: ");
});
module.exports = router;
