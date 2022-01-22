import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Nac'

import CreateExpense from "./create-expense.component";
import CreateUser from "./create-user.component";
import ExpensesList from "./expenses-list.component";

export default class Navbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link to="/" className="navbar-brand">
          ExpenseIN
        </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link innerRef={ExpensesList}>Expenses</Nav.Link>
      <Nav.Link innerRef={CreateExpense}>Create Expense Log</Nav.Link>
      <Nav.Link innerRef={CreateUser}>Create User</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
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
