import React, { PropTypes } from 'react';
import Round from './Round';

const Schedule = ({ tournament }) => {
  return (
    <div>
      {tournament.rounds && tournament.rounds.map((round, index) =>
        <div className="callout">
          <Round key={index} round={round} index={index + 1} />
        </div>
      )}
    </div>
  );
};

Schedule.propTypes = {
  tournament: PropTypes.object.isRequired
};

export default Schedule;