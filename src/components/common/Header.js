import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li className="menu-text">
            <Link to="/courses" activeClassName="active">Courses</Link>
          </li>
          <li className="menu-text">
            <Link to="/about" activeClassName="active">About</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li><input type="search" placeholder="Search" /></li>
          <li><button type="button" className="button">Search</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;