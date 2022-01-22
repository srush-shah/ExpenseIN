const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    username: { type: String, required: [true, "Enter name!"] },
    category: { type: String, required: [true, "Choose a kind of expense!"] },
    description: { type: String, required: true },
    money: { type: Number, required: true },
    date: { type: Date, required: true },
    year: {type: Number, required: true},
    month: {type: String, required: true},
    day: {type: Number, req}
  },
  {
    timestamps: true,
  }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
