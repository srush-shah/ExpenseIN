import React, { Component } from "react";

export default class CreateExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      category: "",
      description: { type: String, required: true },
      money: 0,
      date: new Date(),
      year: Number(this.state.date.slice(0, 4)),
      month: this.state.date.slice(5, 8),
      day: Number(this.date.slice(9, 11)),
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
