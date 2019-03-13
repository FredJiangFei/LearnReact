import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import auth from '../services/authService';

class NavBar extends Component {
  logout = () => {
    auth.logout();
    window.location = '/';
  };

  render() {
    const user = auth.getCurrentUser();
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex w-100">
            {user && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/movies">
                  Movies
                </NavLink>
                <NavLink className="nav-item nav-link" to="/customers">
                  Customers
                </NavLink>
                <NavLink className="nav-item nav-link" to="/rentals">
                  Rentals
                </NavLink>
              </React.Fragment>
            )}

            <span className="fill-remaining-space" />
            {!user && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-item nav-link" to="/register">
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <span
                className="hand"
                onClick={() => this.logout()}
                style={{ marginTop: 8 }}
              >
                Logout
              </span>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
