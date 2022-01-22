const router = require("express").Router();
const dateTime = require("node-datetime");

let Expense = require("../models/expense.model");

router.route("/").get((req, res) => {
  Expense.find()
    .then((expenses) => res.json(expenses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const category = req.body.category;
  const description = req.body.description;
  const money = Number(req.body.money);
  const date = dateTime.create(req.body.date).format("Y-m-d H:M:S");

  const newExpense = new Expense({
    username,
    category,
    description,
    money,
    date,
  });

  newExpense
    .save()
    .then(() => res.json("Expense Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Expense.findById(req.params.id).then((expense) => res.json(expense)).catch(err => res.status(400).json('Error: '));
});

module.exports = router;
