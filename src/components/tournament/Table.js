import React, { PropTypes } from 'react';
import TableRow from './TableRow';

const Table = ({ rows }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Spiele</th>
          <th>Siege</th>
          <th>Punkte</th>
          <th>Tore+/-</th>
          <th>Tore+</th>
          <th>Tore-</th>
        </tr>
      </thead>
      <tbody>
        {rows && rows.map((row, index) =>
          <TableRow key={index} pos={index + 1} row={row} />
        )}
      </tbody>
    </table >
  );
};

Table.propTypes = {
  rows: PropTypes.array
};

export default Table;