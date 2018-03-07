import React, { PropTypes } from 'react';
//import { Link } from 'react-router';

const TableRow = ({ pos, row }) => {
  return (
    <tr>
      <td>{pos}</td>
      <td>{row.player}</td>
      <td>{row.matches}</td>
      <td>{row.wins}</td>
      <td>{row.score}</td>
      <td>{row.goalsScored - row.goalsShipped}</td>
      <td>{row.goalsScored}</td>
      <td>{row.goalsShipped}</td>
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  pos: PropTypes.number.isRequired
};

export default TableRow;