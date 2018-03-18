import React, { PropTypes } from 'react';
import Player from './Player';

const Players = ({ players }) => {
  return (
    <div>
      {players && players.map((player, index) =>
        <Player player={player} key={index} />
      )}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players;