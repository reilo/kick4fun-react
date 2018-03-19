import React, { PropTypes } from 'react';
import Player from './Player';

const Players = ({ players }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Voller Name</th>
          <th>Status</th>
          <th>Aktion</th>
        </tr>
      </thead>
      <tbody>
      {players && players.map((player, index) =>
        <Player player={player} key={index} />
      )}
      </tbody>
    </table >
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players;