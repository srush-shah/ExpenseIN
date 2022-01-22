import React from "react";
import { BrowseRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';


function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
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
