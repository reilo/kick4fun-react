import React, { PropTypes } from 'react';
//import { Link } from 'react-router';

const Player = ({ player }) => {
  const labelClass = player.active ? "success label" : "alert label";
  const label = player.active ? "aktiv" : "inaktiv";
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.fullName}</td>
      <td><span className={labelClass}>{label}</span></td>
      <td>
        <button
          type="button"
          disabled={false}
          className="small button tinyborder">
          {'Edit'}
        </button>
      </td>
    </tr>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

export default Player;