import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Summary = ({ tournament }) => {
  return (
    <div>
      <h5><Link to={'/liga/' + tournament.id}>{tournament.name}</Link></h5>
    </div>
  );
};

Summary.propTypes = {
  tournament: PropTypes.object // isRequired: warning due to asynchronous loading?
};

export default Summary;