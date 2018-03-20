import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Progress from './Progress';

const Header = ({ loading }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text"><p>OpenText Kickerliga</p></li>
          <li className="menu-text">
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
          </li>
          <li className="menu-text">
            <IndexLink to="/admin" activeClassName="active">Admin</IndexLink>
          </li>
          <li className="menu-text">
            <IndexLink to="/playground" activeClassName="active">Bolzplatz</IndexLink>
          </li>
          <li className="menu-text">
            <Link to="/about" activeClassName="active">Info</Link>
          </li>
          <li className="menu-text">
            {loading && <Progress interval={125} dots={10} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;