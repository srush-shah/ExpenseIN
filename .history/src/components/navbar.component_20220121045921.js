import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

import CreateExpense from "./create-expense.component";
import CreateUser from "./create-user.component";
import ExpensesList from "./expenses-list.component";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ExpenseIN</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" innerRef={ExpensesList}>
                Expenses
              </NavLink>
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
