import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateExpense from "./create-expense.component";
import CreateUser from "./create-user.component";
import ExpensesList from "./expenses-list.component";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">
            ExpenseIN
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" innerRef={ExpensesList} className="nav-link">
                  Expenses
                </Link>
              </li>
              <li className="navbar-item">
                <Link
                  to="/create"
                  innerRef={CreateExpense}
                  className="nav-link"
                >
                  Create Expense Log
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" innerRef={CreateUser} className="nav-link">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
