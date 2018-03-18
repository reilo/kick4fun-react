import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text"><p>OpenText Kickerliga</p></li>
          <li className="menu-text">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li className="menu-text">
            <IndexLink to="/edit" activeClassName="active">Edit</IndexLink>
          </li>
          <li className="menu-text">
            <IndexLink to="/admin" activeClassName="active">Admin</IndexLink>
          </li>
          <li className="menu-text">
            <Link to="/about" activeClassName="active">Info</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;