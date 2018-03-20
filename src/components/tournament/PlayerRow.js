import React, { PropTypes } from 'react';

const PlayerRow = ({ player }) => {
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

PlayerRow.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerRow;