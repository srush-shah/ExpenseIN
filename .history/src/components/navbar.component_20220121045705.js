import React, { Component } from "react";
import LinkCont

import { Navbar, Container, Nav } from "react-bootstrap";

import CreateExpense from "./create-expense.component";
import CreateUser from "./create-user.component";
import ExpensesList from "./expenses-list.component";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>ExpenseIN</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" innerRef={ExpensesList}>
                Expenses
              </Link>
              <Link to="/create" innerRef={CreateExpense}>
                Create Expense Log
              </Link>
              <Link to="user" innerRef={CreateUser}>
                Create User
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
