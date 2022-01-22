import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExpensesList from "./components/expenses-list.component";
import EditExpense from "./components/edit-expense.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExpensesList} />
        <Route path="/edit/:id" component={EditExpense} />
      </div>
    </Router>
  );
}

export default App;
