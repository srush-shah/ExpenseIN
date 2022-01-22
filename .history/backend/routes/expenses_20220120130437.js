const router = require("express").Router();

let Expense = require("../models/expense.model");

router.route("/").get((req, res) => {
    Expense.find().then(expenses => res.json(expenses))
});
