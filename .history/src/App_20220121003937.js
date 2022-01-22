import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExpensesList} />
        <Route path="/update/:id" exact component={Expense} />
        <Route path="/" exact component={ExpensesList} />
        <Route path="/" exact component={ExpensesList} />
      </div>
      ;
    </Router>
  );
}

export default App;
