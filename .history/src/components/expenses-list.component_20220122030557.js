import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class ExpensesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExpense = this.deleteExpense.bind(this);

    this.state = { expenses: [] };
  }


  
  render() {
    return (
      <div>
        <p>You are on the Expenses List component!</p>
      </div>
    );
  }
}
