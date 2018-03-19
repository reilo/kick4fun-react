import React, { PropTypes } from 'react';
import Tournament from './Tournament';

const Tournaments = ({ tournaments }) => {
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
          <Tournament key={index} tournament={tournament} />
        )}
      </tbody>
    </table >
  );
};

Tournaments.propTypes = {
  tournaments: PropTypes.array.isRequired
};

export default Tournaments;