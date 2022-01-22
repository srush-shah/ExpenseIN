const router = require("express").Router();

let User = require("../models/user.model");

/*
Route           /search/date
Description     get all expenses by date
Access          PUBLIC
Parameters      date
Method          GET
*/

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
