import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/characters/',
    label: 'Characters',
  },
];

const Navbar = () => {
  const linkItems = links.map(({ to, label }) => (
    <li className="nav-item" key={label}>
      <NavLink
        exact
        className="nav-link"
        activeClassName="nav-link-active"
        aria-current="page"
        to={to}>
        {label}
      </NavLink>
    </li>
  ));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">{linkItems}</ul>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
