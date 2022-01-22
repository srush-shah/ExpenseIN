import React, { Component } from "react";

import { Navbar, Container, Nav } from "react-bootstrap";


import CreateUser from "./create-user.component";
import ExpensesList from "./expenses-list.component";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">ExpenseIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link innerRef={ExpensesList}>Expenses</Nav.Link>
              <Nav.Link href="./create-expense.component">Create Expense Log</Nav.Link>
              <Nav.Link innerRef={CreateUser}>Create User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
