const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    username: {type: String, required: true},
    description: {type: String, required: true},
    money: {tp}
})