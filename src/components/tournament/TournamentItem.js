import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const TournamentItem = ({ tournament, editMode, ranking }) => {
  const url = editMode ? '/edit/' : '/liga/';
  return (
    ranking && tournament.ranking ? 
    <div>
      <hr/>
      <h5><Link to={url + tournament.id}>{tournament.name}</Link></h5>
      <p>1. {tournament.ranking[0]} - 2. {tournament.ranking[1]} - 3. {tournament.ranking[2]}</p>
    </div>
    :
    <div>
      <h5><Link to={url + tournament.id}>{tournament.name}</Link></h5>
    </div>
  );
};

TournamentItem.propTypes = {
  tournament: PropTypes.object.isRequired,
  editMode: PropTypes.bool,
  ranking: PropTypes.bool
};

export default TournamentItem;