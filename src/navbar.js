import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { App } from './app.js';
const NavBar = () => {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to={'/view-manage'} className="nav-link">
              View and Manage
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link">Add</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default NavBar;
