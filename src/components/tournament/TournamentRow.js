import React, { PropTypes } from 'react';

const TournamentRow = ({ tournament }) => {
  const openUrl = "/liga/" + tournament.id; 
  const editUrl = "/edit/" + tournament.id;
  const labelClass = tournament.official ? "success label" : "secondary label";
  const label = tournament.official ? "Liga" : "Test";
  return (
    <tr>
      <td><a href={openUrl}>{tournament.name}</a></td>
      <td>{tournament.createdBy}</td>
      <td><span className={labelClass}>{label}</span></td>
      <td><a className="small button tinyborder" href={editUrl}>Edit</a></td>
    </tr>
  );
};

TournamentRow.propTypes = {
  tournament: PropTypes.object.isRequired
};

export default TournamentRow;