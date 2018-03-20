import React, { PropTypes } from 'react';
import TournamentRow from './TournamentRow';

const TournamentTable = ({ tournaments }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ersteller</th>
          <th>Aktion</th>
        </tr>
      </thead>
      <tbody>
        {tournaments && tournaments.map((tournament, index) =>
          <TournamentRow key={index} tournament={tournament} />
        )}
      </tbody>
    </table >
  );
};

TournamentTable.propTypes = {
  tournaments: PropTypes.array.isRequired
};

export default TournamentTable;