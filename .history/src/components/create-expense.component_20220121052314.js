import React, { Component } from "react";

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
    this.onChangeUsername = this.onChangeUsername.bind(this);
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
        <p>You are on the Create Expense component!</p>
      </div>
    );
  }
}
