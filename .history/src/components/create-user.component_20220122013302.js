import React, { Component } from "react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      
    }
  }
  render() {
    return (
      <div>
        <p>You are on the Create User component!</p>
      </div>
    );
  }
}
