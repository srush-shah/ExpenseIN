import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, NavLink, Nav, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

import CreateExpense from "./create-expense.component";
import CreateUser from "./create-user.component";
import ExpensesList from "./expenses-list.component";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
      </Navbar>
    );
  }
}
