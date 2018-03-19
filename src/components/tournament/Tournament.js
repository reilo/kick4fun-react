import React, { PropTypes } from 'react';
//import { Link } from 'react-router';

const Tournament = ({ tournament }) => {
  const openUrl = "/liga/" + tournament.id; 
  const editUrl = "/edit/" + tournament.id;
  return (
    <tr>
      <td><a href={openUrl}>{tournament.name}</a></td>
      <td>{tournament.createdBy}</td>
      <td><a className="small button tinyborder" href={editUrl}>Edit</a></td>
    </tr>
  );
};

Tournament.propTypes = {
  tournament: PropTypes.object.isRequired
};

export default Tournament;