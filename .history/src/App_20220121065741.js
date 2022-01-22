import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/navbar.component";
import ExpensesList from "./components/expenses-list.component";
import EditExpense from "./components/edit-expense.component";
import CreateExpense from "./components/create-expense.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <br />
        <Routes>
          <Route exact path="/">
            <ExpensesList />
          </Route>
          <Route exact path="/edit/:id">
            <EditExpense />
          </Route>
          <Route exact path="/create">
            <CreateExpense />
          </Route>
          <Route exact path="/user">
            <CreateUser />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
