import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import {useParams} from 'react-router-dom';

export default function EditExpense () {
  const [username, setUsername] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [money, setMoney] = useState('');
  const [date, setDate] = useState('');
  const [users, setUsers] = useState('');
  let {id} = useParams();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  }

  const handleChangeDescription =(e) => {
   setDescription(e.target.value);
  }

  const handleChangeMoney =(e) => {
    setMoney(Number(e.target.value));
  }

  const handleChangeDate = (date) => {
    setDate(date);
  }

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/expenses/" +id
      )
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
  })

  submit = () => {

    const expense = {
        setUsername(username),
        setCategory(category),
        setDescription(description);
        setMoney(Number(money));
        setDate(new Date(date));
    };

    console.log(expense);

    axios
      .post(
        "http://localhost:5000/expenses/update/" + id,
        expense
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }
  return ();
}
