import React, { PropTypes } from 'react';
import Summary from './Summary';

const History = ({ tournaments }) => {
  return (
    <div>
      {tournaments && tournaments.slice().sort((a, b) =>
        a.status > b.status ? -1 : b.status > a.status ? 1 :
          a.completedDate > b.completedDate ? -1 : b.completedDate > a.completedDate ? 1 : 0
      ).map((tournament, index) =>
        /*tournament.status == "completed" && tournament.official == true &&*/
        <div>
          <hr />
          <Summary key={index} tournament={tournament} />
        </div>
      )}
    </div>
  );
};

History.propTypes = {
  tournaments: PropTypes.array // isRequired: warning due to asynchronous loading?
};

export default History;