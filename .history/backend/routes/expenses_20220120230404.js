const router = require("express").Router();
const dateTime = require("node-datetime");

let Expense = require("../models/expense.model");

/*
Route           /
Description     get all expenses
Access          PUBLIC
Parameters      NONE
Method          GET
*/

router.route("/").get((req, res) => {
  Expense.find()
    .then((expenses) => res.json(expenses))
    .catch((err) => res.status(400).json("Error: " + err));
});

/*
Route           /add
Description     add an expense
Access          PUBLIC
Parameters      NONE
Method          POST
*/

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const category = req.body.category;
  const description = req.body.description;
  const money = Number(req.body.money);
  const date = dateTime.create(req.body.date).format("Y/n/d H:M:S");

  const year = Number(date.slice(0, 4));
  const month = date.slice(5, 8);
  const day = Number(date.slice(9, 11));

  const newExpense = new Expense({
    username,
    category,
    description,
    money,
    date,
    year,
    month,
    day,
  });

  newExpense
    .save()
    .then(() => res.json("Expense Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

/*
Route           /search
Description     get expense by id
Access          PUBLIC
Parameters      id
Method          GET
*/

router.route("/search/:id").get((req, res) => {
  Expense.findById(req.params.id)
    .then((expense) => res.json(expense))
    .catch((err) => res.status(400).json("Error: " + err));
});

/*
Route           /
Description     delete a book by id
Access          PUBLIC
Parameters      id
Method          DELETE
*/

router.route("/:id").delete((req, res) => {
  Expense.findByIdAndDelete(req.params.id)
    .then(() => res.json("Entry deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

/*
Route           /update
Description     update expense by id
Access          PUBLIC
Parameters      id
Method          POST
*/

router.route("/update/:id").post((req, res) => {
  Expense.findById(req.params.id)
    .then((expense) => {
      expense.username = req.body.username;
      expense.category = req.body.category;
      expense.description = req.body.description;
      expense.money = Number(req.body.money);
      if (req.body.date) {
        expense.date = dateTime.create(req.body.date);
      }

      expense
        .save()
        .then(() => res.json("Expense Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json((err) => res.json("Error: " + err)));
});

/*
Route           /search/category
Description     get all expenses by category
Access          PUBLIC
Parameters      category
Method          GET
*/

router.route("/search/category/:category").get((req, res) => {
  Expense.find({ category: req.params.category })
    .then((expenses) => res.json(expenses))
    .catch((err) => res.status(400).json("Error: " + err));
});

/*
Route           /search/year
Description     get all expenses by year
Access          PUBLIC
Parameters      year
Method          GET
*/

router.route("/search/year/:year").get((req, res) => {
  Expense.find({ year: Number(req.params.year) })
    .then((expenses) => res.json(expenses))
    .catch((err) => res.status(400).json("Error: " + err));
});

/*
Route           /search/month
Description     get all expenses by month
Access          PUBLIC
Parameters      month
Method          GET
*/

router.route("/search/month/:month").get((req, res) => {
  Expense.find({ month: req.params.month })
    .then((expenses) => res.json(expenses))
    .catch((err) => res.status(400).json(err));
});

/*
Route           /search/date
Description     get all expenses by date
Access          PUBLIC
Parameters      date
Method          GET
*/

router.route('/search/date/:date').get()

module.exports = router;
