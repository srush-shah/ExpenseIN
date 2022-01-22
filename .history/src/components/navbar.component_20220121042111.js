import React, { Component } from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">ExpenseIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="./expenses-list.component">Expenses</Nav.Link>
              <Nav.Link href="./create-expense.component">
                Create Expense Log
              </Nav.Link>
              <Nav.Link href="./create-user.component">Create User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
