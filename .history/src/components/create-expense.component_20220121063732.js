import React, { Component } from "react";
import { Form } from "react-bootstrap";

export default class CreateExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      category: "",
      description: "",
      money: 0,
      date: new Date(),
      users: [],
    };

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeMoney = this.onChangeMoney.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "test user",
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

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Expense Log</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
            <Form.Control type="text" placeholder="Select Username"/>
              
              <Form.Select
                ref="userInput"
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
              </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Select Username">
              <Form.Label>Category: </Form.Label>
              <Form.Select
                ref="userInput"
                required
                className="form-control"
                value={this.state.category}
                onChange={this.onChangeCategory}
              >
                {this.state.users.map(function (category) {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description: </Form.Label>
            
          </Form.Group>
        </Form>
      </div>
    );
  }
}
