import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExpensesList from "./components/expenses-list.component";
import EditExpense from "./components/edit-expense.component";
import CreateExpense from "./components/create-expense.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <br />
      <Switch>
        <Route path="/" exact component={ExpensesList} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/create" exact component={CreateExpense} />
        <Route path="/user" exact component={CreateUser} />
      </Switch>
      
    </Router>
  );
}

export default App;
