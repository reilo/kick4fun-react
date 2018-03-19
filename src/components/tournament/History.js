import React, { PropTypes } from 'react';
import Summary from './Summary';

const History = ({ tournaments, editMode, ranking }) => {
  return (
    <div>
      {tournaments && tournaments.slice().sort((a, b) =>
        a.status > b.status ? -1 : b.status > a.status ? 1 :
          a.completedDate > b.completedDate ? -1 : b.completedDate > a.completedDate ? 1 : 0
      ).map((tournament, index) =>
        <Summary key={index} tournament={tournament} editMode={editMode} ranking={ranking} />
      )}
    </div>
  );
};

History.propTypes = {
  tournaments: PropTypes.array.isRequired,
  editMode: PropTypes.bool,
  ranking: PropTypes.bool
};

export default History;