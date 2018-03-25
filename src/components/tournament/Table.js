import React, { PropTypes } from 'react';
import TableRow from './TableRow';

const Table = ({ rows, count, columns }) => {
  let headers = [];
  let index = 0;
  headers.push(React.createElement('th', { key: index++ }, ""));
  headers.push(React.createElement('th', { key: index++ }, "Name"));
  (!columns || columns.indexOf("matches") > -1) &&
    headers.push(React.createElement('th', { className: "number", key: index++ }, "Spiele"));
  (!columns || columns.indexOf("wins") > -1) &&
    headers.push(React.createElement('th', { className: "number", key: index++ }, "Siege"));
  (!columns || columns.indexOf("score") > -1) &&
    headers.push(React.createElement('th', { className: "number", key: index++ }, "Punkte"));
  (!columns || columns.indexOf("goalsDiff") > -1) &&
    headers.push(React.createElement('th', { className: "number", key: index++ }, "Tore+/-"));
  (!columns || columns.indexOf("goalsScored") > -1) &&
    headers.push(React.createElement('th', { className: "number", key: index++ }, "Tore+"));
  (!columns || columns.indexOf("goalsShipped") > -1) &&
    headers.push(React.createElement('th', { className: "number", key: index++ }, "Tore-"));
  return React.createElement('table', { className: "table" }, [
    React.createElement('thead', { key: index++ }, React.createElement('tr', {}, headers)),
    React.createElement('tbody', { key: index++ }, rows && rows.map((row, index) =>
      (!count || count > index) &&
      <TableRow key={index} pos={index + 1} row={row} columns={columns} />
    ))
  ]);
};

Table.propTypes = {
  rows: PropTypes.array.isRequired,
  count: PropTypes.number,
  columns: PropTypes.array
};

export default Table;