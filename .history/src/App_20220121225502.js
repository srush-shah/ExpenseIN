import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import ExpensesList from "./components/expenses-list";
import EditExpense from "./components/edit-expense";
import CreateExpense from "./components/create-expense";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
      <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element={<ExpensesList />} />
          <Route path="/edit/:id" element={<EditExpense />} />
          <Route path="/create" exact element={<CreateExpense />} />
          <Route path="/user" exact element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
