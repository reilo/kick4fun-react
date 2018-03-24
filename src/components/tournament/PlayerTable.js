import React, { PropTypes } from 'react';
import PlayerRow from './PlayerRow';

const PlayerTable = ({ players }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Kurzname</th>
          <th>Name</th>
          <th>Status</th>
          <th>Aktion</th>
        </tr>
      </thead>
      <tbody>
      {players && players.map((player, index) =>
        <PlayerRow player={player} key={index} />
      )}
      </tbody>
    </table >
  );
};

PlayerTable.propTypes = {
  players: PropTypes.array.isRequired
};

export default PlayerTable;