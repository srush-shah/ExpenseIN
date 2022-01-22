import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";
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
              <Link innerRef={ExpensesList}>Expenses</Link>
              <Link innerRef={}>Create Expense Log</Link>
              <Link to="user">Create User</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
