import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, NavLink } from "react-bootstrap";

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
              <Link to="/">Expenses</Link>
              <Link to="/create">Create Expense Log<Link>
              <NavLink to="user">Create User</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
