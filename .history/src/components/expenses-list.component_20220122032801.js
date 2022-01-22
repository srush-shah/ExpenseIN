import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Expense = props => (
  <tr>
    <td>{props.expense.username}</td>
    <td>{props.expense.category}</td>
    <td>{props.expense.description}</td>
    <td>{props.expense.money}</td>
    <td>{props.expense.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.expense._id}>Edit</Link> | 
    </td>
  </tr>
)
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
    axios
      .delete("http://localhost:5000/expenses/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      expenses: this.state.expenses.filter((el) => el._id !== id),
    });
  }

  expenseList() {
    return this.state.expenses.map((curr) => {
      return (
        <Expense
          expense={curr}
          deleteExpense={this.deleteExpense}
          key={curr._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Expenses</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Category</th>
              <th>Description</th>
              <th>Income/Expense</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.expenseList()}</tbody>
        </table>
      </div>
    );
  }
}
