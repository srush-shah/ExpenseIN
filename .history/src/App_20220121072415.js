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
          <Route exact path="/" component={ExpensesList} />
          <Route exact path="/edit/:id" component={EditExpense} />
          <Route exact path="/create" component={CreateExpense} />
          <Route exact path="/user" component={CreateUser} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//Issue: Frontend not rendering from the componen
