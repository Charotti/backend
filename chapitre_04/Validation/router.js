const express = require("express");
const router = express.Router();
const Joi = require("Joi");

const schema = Joi.object({
  userName: Joi.string().alphanum().min(4).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  age: Joi.number().min(10).max(99).required(),
  city: Joi.string().required(),
});
const users = [
  {
    id: 1,
    userName: "Caroline",
    email: "caroline@gmail.com",
    age: 25,
    city: "Carennac",
  },

  {
    id: 2,
    userName: "Sophie",
    email: "Sophie@gmail.com",
    age: 32,
    city: "Vayrac",
  },
];
// / ROUTES

router.get("/", (_req, res) => {
  res.json(users);
});
router.post("/", (req, res) => {
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
router.get("/users/:userName", (req, res) => {
  const user = users.find((user) => {
    return (
      user.userName.replace(" ", "-").toLowerCase() ===
      req.params.userName.replace(" ", "-").toLowerCase()
    );
  });
  if (!user) {
    return res.send("User not found");
  }
  res.json(user);
});
// Trouver la route par id
router.get("/users/id/:id", (req, res) => {
  const user = users.find((user) => {
    return user.id.toString() === req.params.id;
  });

  if (!user) {
    return res.send("User not found");
  }
  res.json(user);
});
// trouver la route par email
router.get("/users/email/:email", (req, res) => {
  const user = users.find((user) => {
    return user.email.toString() === req.params.email.toString();
  });
  if (!user) {
    return res.send("User not found");
  }
  res.json(user);
});

module.exports = router;
