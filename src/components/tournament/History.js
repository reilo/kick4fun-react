import React, { PropTypes } from 'react';
import Summary from './Summary';

const History = ({ tournaments }) => {
  return (
    <div>
        {tournaments && tournaments.map((tournament, index) =>
          <Summary key={index} tournament={tournament} />
        )}
    </div>
  );
};

History.propTypes = {
  tournaments: PropTypes.array // isRequired: warning due to asynchronous loading?
};

export default History;