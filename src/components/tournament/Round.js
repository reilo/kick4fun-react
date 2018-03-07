import React, { PropTypes } from 'react';

const Round = ({ index, round }) => {
  return (
    <div>
      <h3>Runde Nr. {index}</h3>
      <h4>Von {round.startDate} bis {round.endDate}</h4>
    </div>
  );
};

Round.propTypes = {
  round: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default Round;