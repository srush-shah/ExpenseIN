import React from 'react';
import 
import "bootstrap/dist/css/bootstrap.min.css";

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
