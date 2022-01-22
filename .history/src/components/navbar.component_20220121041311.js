import React, { Component } from "react";

import { Navbar, Container, NavLin, Nav} from "react-bootstrap";

import CreateExpense from "./create-expense.component";
import CreateUser from "./create-user.component";
import ExpensesList from "./expenses-list.component";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavbarBrand to="/">ExpenseIN</NavbarBrand>
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
