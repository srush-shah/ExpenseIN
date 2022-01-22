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
  onChange(e) {
    this.setState({
      category: e.target.value,
    });
  }
  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <p>You are on the Create Expense component!</p>
      </div>
    );
  }
}