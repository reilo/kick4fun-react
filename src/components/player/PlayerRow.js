import React, { PropTypes } from 'react';

const PlayerRow = ({ player }) => {
  const labelClass = player.active ? "success label" : "alert label";
  const label = player.active ? "aktiv" : "inaktiv";
  const editUrl = "/player/" + player.id;
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.fullName}</td>
      <td><span className={labelClass}>{label}</span></td>
      <td><a className="small button tinyborder" href={editUrl}>Edit</a></td>
    </tr>
  );
};

PlayerRow.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerRow;