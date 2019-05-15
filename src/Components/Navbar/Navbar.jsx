import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    const user = this.props.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <Link className="navbar-brand" to="/">
          Phoenix HR System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {!user && (
                <Link className="nav-link" to="/profile">
                  Home <span className="sr-only">(current)</span>
                </Link>
              )}
              {user && (
                <Link className="nav-link" to="/profile">
                  Profile <span className="sr-only">(current)</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
