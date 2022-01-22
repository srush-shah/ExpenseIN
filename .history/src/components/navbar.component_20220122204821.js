import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/js/dist/collapse";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class Navbar extends Component {
  render() {
    const url = window.location.href;
    create
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand">
            ExpenseIN
          </Link>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Expenses
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Expense Log
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/user" className="nav-link">
                  Create User
                </Link>
              </li>
            </ul>
            <CopyToClipboard text={url}>
              <button
                className="btn btn-light btn-sm"
                onClick={this.createAlert)}
              >
                Share App Link
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </nav>
    );
  }
}
