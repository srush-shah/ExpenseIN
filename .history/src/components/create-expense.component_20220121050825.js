import React, { Component } from "react";

export default class CreateExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        category: "",
        description: { type: String, required: true },
        money: 0,
        date: ,
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
