import React from 'react';
import { Link } from 'react-router';

// use class instead of function because of hot reloading restrictions
class HomePage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="small-12 medium-12 large-12 ">
          <h1>Pluralsight Administration</h1>
          <p>React, Redux and React Rounter in ES6 for ultra-responsive web apps.</p>
          <Link to="about" className="large button">Learn more</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;