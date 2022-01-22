import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class ExpensesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExpense = this.deleteExpense.bind(this);

    this.state = { expenses: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/expenses/")
      .then((res) => {
        this.setState({ expenses: res.data });
      })
      .catch((err) => console.log(err));
  }

  deleteExpense(id) {
    axios.delete("http://localhost:5000/");
  }

  render() {
    return (
      <div>
        <p>You are on the Expenses List component!</p>
      </div>
    );
  }
}
