import React, { Component } from "react";
import { Link } from "react-router-dom";

import ExpensesList from "./expenses-list.component";
import CreateExpense from "./create-expense.component";
import CreateUser from './cre'
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
              <Link to="/" innerRef={Expense}></Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
