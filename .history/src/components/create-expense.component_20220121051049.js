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
      year: Number(new Date().slice(0, 4)),
      month: date.slice(5, 8),
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
