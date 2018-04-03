import React, { PropTypes } from 'react';

const TableRow = ({ pos, row, columns, highlighting = [], onChange }) => {
  let rows = [];
  let index = 1;
  const style = highlighting.indexOf(row.player) > -1 ?
    { backgroundColor: "lightblue" } : {};
  rows.push(React.createElement(
    'td', { key: index++ }, pos.toString()));
  (!columns || columns.indexOf("check") > -1) &&
    rows.push(React.createElement(
      'input', {
        type: "checkBox", id: "cb_" + row.player, name: "cb_" + row.player,
        onChange: onChange, key: index++
      }));
  rows.push(React.createElement(
    'td', { style: style, key: index++ }, row.player));
  (!columns || columns.indexOf("matches") > -1) &&
    rows.push(React.createElement(
      'td', { className: "number", key: index++ }, row.matches));
  (!columns || columns.indexOf("wins") > -1) &&
    rows.push(React.createElement(
      'td', { className: "number", key: index++ }, row.wins));
  (!columns || columns.indexOf("score") > -1) &&
    rows.push(React.createElement(
      'td', { className: "number", key: index++ }, row.score));
  (!columns || columns.indexOf("goalsDiff") > -1) &&
    rows.push(React.createElement(
      'td', { className: "number", key: index++ },
      row.goalsScored - row.goalsShipped));
  (!columns || columns.indexOf("goalsScored") > -1) &&
    rows.push(React.createElement(
      'td', { className: "number", key: index++ }, row.goalsScored));
  (!columns || columns.indexOf("goalsShipped") > -1) &&
    rows.push(React.createElement(
      'td', { className: "number", key: index++ }, row.goalsShipped));
  return React.createElement('tr', {}, rows);
};

TableRow.propTypes = {
  row: PropTypes.object.isRequired,
  pos: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  columns: PropTypes.array,
  highlighting: PropTypes.array
};

export default TableRow;