const router = require("express").Router();

let Expense = require("../models/expense.model");

router.route("/").get((req, res) => {
  Expense.find()
    .then((expenses) => res.json(expenses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const money = Number(req.body.money);
  const date = Date.parse(req.body.date) | Dat;

  const newExpense = new Expense({
    username,
    description,
    money,
    date,
  });

  newExpense
    .save()
    .then(() => res.json("Expense Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
