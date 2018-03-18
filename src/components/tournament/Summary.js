import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Summary = ({ tournament }) => {
  return (
    tournament.ranking ? 
    <div>
      <hr/>
      <h5><Link to={'/liga/' + tournament.id}>{tournament.name}</Link></h5>
      <p>1. {tournament.ranking[0]} - 2. {tournament.ranking[1]} - 3. {tournament.ranking[2]}</p>
    </div>
    :
    <div>
      <hr/>
      <h5><Link to={'/liga/' + tournament.id}>{tournament.name}</Link></h5>
    </div>
  );
};

Summary.propTypes = {
  tournament: PropTypes.object.isRequired
};

export default Summary;