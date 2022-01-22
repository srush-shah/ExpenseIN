import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, NavItem } from "react-bootstrap";

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
              
                <NavItem><Link innerRef={ExpensesList}>Expenses</Link></NavItem>
              
              
                <NavItem><Link innerRef={CreateExpense}>Create Expense Log</Link></NavItem>
              
              <Link innerRef={CreateUser}>
                <NavItem>Create User</NavItem>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
