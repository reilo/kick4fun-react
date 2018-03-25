import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Progress from './Progress';

const Header = ({ loading }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            <img src="http://www.lorein.de/kicker/images/wanderpokal.jpg" width="128" />
          </li>
          <li className="menu-text">
            <IndexLink to="/" activeClassName="active">Kickerliga</IndexLink>
          </li>
          <li className="menu-text">
            <IndexLink to="/admin" activeClassName="active">Schiri</IndexLink>
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
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            <img src="http://www.lorein.de/kicker/images/header_opentext.png" width="128" />
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