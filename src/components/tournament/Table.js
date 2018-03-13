import React, { PropTypes } from 'react';
import TableRow from './TableRow';

const Table = ({ rows }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th className="number">Spiele</th>
          <th className="number">Siege</th>
          <th className="number">Punkte</th>
          <th className="number">Tore+/-</th>
          <th className="number">Tore+</th>
          <th className="number">Tore-</th>
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
  rows: PropTypes.array // isRequired: warning due to asynchronous loading?
};

export default Table;