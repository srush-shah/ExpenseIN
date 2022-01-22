import React, { Component } from "react";
import { Link } from "react-router-dom";

import ExpensesList from "./expenses-list.component";
import CreateExpense from "./create-expense.component";
import CreateUser from "./create-user.component";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          ExpenseIN
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" innerRef={ExpensesList}>Expenses</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" innerRef={CreateExpense}>Create Expense Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" innerRef={CreateUser}></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
