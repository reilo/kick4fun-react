import React, { PropTypes } from 'react';
//import { Link } from 'react-router';

const TableRow = ({ pos, row, columns }) => {
  let rows = [];
  let index = 1;
  rows.push(React.createElement('td', { key: index++ }, pos.toString()));
  rows.push(React.createElement('td', { key: index++ }, row.player));
  (!columns || columns.indexOf("matches") > -1) &&
    rows.push(React.createElement('td', { className: "number", key: index++ }, row.matches));
  (!columns || columns.indexOf("wins") > -1) &&
    rows.push(React.createElement('td', { className: "number", key: index++ }, row.wins));
  (!columns || columns.indexOf("score") > -1) &&
    rows.push(React.createElement('td', { className: "number", key: index++ }, row.score));
  (!columns || columns.indexOf("goalsDiff") > -1) &&
    rows.push(React.createElement('td', { className: "number", key: index++ }, row.goalsScored - row.goalsShipped));
  (!columns || columns.indexOf("goalsScored") > -1) &&
    rows.push(React.createElement('td', { className: "number", key: index++ }, row.goalsScored));
  (!columns || columns.indexOf("goalsShipped") > -1) &&
    rows.push(React.createElement('td', { className: "number", key: index++ }, row.goalsShipped));
  return React.createElement('tr', {}, rows);
};

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  pos: PropTypes.number.isRequired,
  columns: PropTypes.array
};

export default TableRow;