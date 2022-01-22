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
        setDate(date);
        this.setState({
          username: res.data.username,
          category: res.data.category,
          description: res.data.description,
          money: res.data.money,
          date: new Date(res.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users/")
      .then((res) => {
        this.setState({ users: res.data.map((user) => user.username) });
      })
      .catch((error) => {
        console.log(error);
      });
  })

  onSubmit(e) {
    e.preventDefault();

    const expense = {
      username: this.state.username,
      category: this.state.category,
      description: this.state.description,
      money: this.state.money,
      date: this.state.date,
    };
}
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeMoney = this.onChangeMoney.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.textInput = createRef();

    this.state = {
      username: "",
      category: "",
      description: "",
      money: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:5000/expenses/" +
          (this.props.match && this.props.match.params.id)
      )
      .then((res) => {
        this.setState({
          username: res.data.username,
          category: res.data.category,
          description: res.data.description,
          money: res.data.money,
          date: new Date(res.data.date),
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users/")
      .then((res) => {
        this.setState({ users: res.data.map((user) => user.username) });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeMoney(e) {
    this.setState({
      money: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const expense = {
      username: this.state.username,
      category: this.state.category,
      description: this.state.description,
      money: this.state.money,
      date: this.state.date,
    };

    console.log(expense);

    axios
      .post(
        "http://localhost:5000/expenses/update/" +
          (this.props.match && this.props.match.params.id),
        expense
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Expense Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref={this.textInput}
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function (user) {
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
              value={this.state.category}
              onChange={this.onChangeCategory}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Income/Expense (in ₹): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.money}
              onChange={this.onChangeMoney}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <br />
            <input
              type="submit"
              value="Edit Expense Log"
              className="btn btn-primary btn"
            />
          </div>
        </form>
      </div>
    );
  }
}
