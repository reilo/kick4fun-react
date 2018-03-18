import React, { PropTypes } from 'react';
//import { Link } from 'react-router';

const Player = ({ player }) => {
  return (
    <div>
      {player.fullName}
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object // isRequired: warning due to asynchronous loading?
};

export default Player;