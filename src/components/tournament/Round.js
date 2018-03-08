import React, { PropTypes } from 'react';
import Match from './Match';

const Round = ({ index, round }) => {
  return (
    <div>
      <h4>Runde Nr. {index}</h4>
      <h5>Von {round.startDate} bis {round.endDate}</h5>
      {round.matches.map((match, index) => <Match match={match} key={index} />)}
    </div>
  );
};

Round.propTypes = {
  round: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default Round;