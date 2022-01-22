import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExpensesList from "./components/expenses-list.component";
import EditExpense from "./components/edit-expense.component";
import CreateExpense from "./components/create-expense.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact component={ExpensesList} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route path="/create" exact component={CreateExpense} />
          <Route path="/user" exact component={CreateUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
