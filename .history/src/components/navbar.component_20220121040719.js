import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, NavLink } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

import CreateExpense from "./create-expense.component";
import CreateUser from "./create-user.component";
import ExpensesList from "./expenses-list.component";

export default class Navbar extends Component {
  render() {
    return (
      < collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
  <Link to="/" className="navbar-brand">
          ExpenseIN
        </Link>
  <NavbarToggle aria-controls="responsive-navbar-nav" />
  <NavbarCollapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink innerRef={ExpensesList}>Expenses</NavLink>
      <NavLink innerRef={CreateExpense}>Create Expense Log</NavLink>
      <NavLink innerRef={CreateUser}>Create User</NavLink>
    </Nav>
  </NavbarCollapse>
  </Container>
</>
      <nav
        className="navbar navbar-dark bg-dark navbar-expand-lg"
        collapseOnSelect
      >
        <Link to="/" className="navbar-brand">
          ExpenseIN
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" innerRef={ExpensesList} className="nav-link">
                Expenses
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" innerRef={CreateExpense} className="nav-link">
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
      </nav>
    );
  }
}
