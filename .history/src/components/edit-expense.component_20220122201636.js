import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditExpense() {
  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  const [date, setDate] = useState("");
  const [users, setUsers] = useState("");
  let { id } = useParams();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeMoney = (e) => {
    setMoney(Number(e.target.value));
  };

  const handleChangeDate = (date) => {
    setDate(date);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/expenses/" + id)
      .then((res) => {
        setUsername(res.data.username);
        setCategory(res.data.category);
        setDescription(res.data.description);
        setMoney(Number(res.data.money));
        setDate(new Date(res.data.date));
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users/")
      .then((res) => {
        setUsers(res.data.map((user) => user.username));
      })
      .catch((error) => {
        console.log(error);
      });
  });

   {
    setUsername(username);
    setCategory(category);
    setDescription(description);
    setMoney(Number(money));
    setDate(new Date(date));

    const expense = {
      username,
      category,
      description,
      money,
      date,
    };

    console.log(expense);

    axios
      .post("http://localhost:5000/expenses/update/" + id, expense)
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  return (
    <div>
      <h3>Edit Expense Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            ref="userInput"
            required
            className="form-control"
            value={username}
            onChange={handleChangeUsername}
          >
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Category: </label>
          <input
            type="text"
            required
            className="form-control"
            value={category}
            onChange={handleChangeCategory}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={handleChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Income/Expense (in ₹): </label>
          <input
            type="text"
            className="form-control"
            value={money}
            onChange={handleChangeMoney}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={handleChangeDate} />
          </div>
        </div>
        <div className="form-group">
          <br />
          <input
            type="submit"
            value="Create Expense Log"
            className="btn btn-primary btn"
          />
        </div>
      </form>
    </div>
  );
}
