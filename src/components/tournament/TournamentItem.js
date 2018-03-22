import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const TournamentItem = ({ tournament, editMode, ranking }) => {
  const t = tournament;
  const url = editMode ? '/edit/' : '/liga/';
  return (
    ranking && t.ranking ? 
    <div>
      <hr/>
      <h5><Link to={url + t.id}>{t.name}</Link></h5>
      <p>1. {t.ranking[0]} - 2. {t.ranking[1]} - 3. {t.ranking[2]}</p>
    </div>
    :
    <div>
      <h5><Link to={url + t.id}>{t.name}</Link></h5>
    </div>
  );
};

TournamentItem.propTypes = {
  tournament: PropTypes.object.isRequired,
  editMode: PropTypes.bool,
  ranking: PropTypes.bool
};

export default TournamentItem;