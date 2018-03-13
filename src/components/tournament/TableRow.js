import React, { PropTypes } from 'react';
//import { Link } from 'react-router';

const TableRow = ({ pos, row }) => {
  return (
    <tr>
      <td>{pos}</td>
      <td>{row.player}</td>
      <td className="number">{row.matches}</td>
      <td className="number">{row.wins}</td>
      <td className="number">{row.score}</td>
      <td className="number">{row.goalsScored - row.goalsShipped}</td>
      <td className="number">{row.goalsScored}</td>
      <td className="number">{row.goalsShipped}</td>
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  pos: PropTypes.number.isRequired
};

export default TableRow;