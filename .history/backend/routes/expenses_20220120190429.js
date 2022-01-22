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

/*
Route           /
Description     get expense by id
Access          PUBLIC
Parameters      id
Method          GET
*/

router.route("/:id").get((req, res) => {
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

router.route('/update/:id').post((req,res) => {
    Expense.findById(req.params.id).then(expense => {
        expense.username = req.body.username;
        expense.category = req.body.category;
        expense.description = req.
    })
})

module.exports = router;
