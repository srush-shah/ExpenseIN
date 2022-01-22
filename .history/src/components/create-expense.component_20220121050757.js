import React, { Component } from "react";

export default class CreateExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: { type: String, required: [true, "Enter name!"] },
        category: { type: String, required: [true, "Choose a kind of expense!"] },
        description: { type: String, required: true },
        money: { type: Number, required: true },
        date: { type: Date, required: true },
        year: { type: Number, required: true },
        month: { type: String, required: true },
        day: { type: Number, required: true },
    };
  }
  render() {
    return (
      <div>
        <p>You are on the Create Expense component!</p>
      </div>
    );
  }
}
