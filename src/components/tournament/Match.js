import React, { PropTypes } from 'react';

const Match = ({ match }) => {
  const p = match.player;
  const r = match.result;
  return (
    <div>
      <p>{p[0][0]} &amp; {p[0][1]} vs. {p[1][0]} &amp; {p[1][1]} - {r[0][0]}:{r[0][1]}, {r[1][0]}:{r[1][1]}, {r[2][0]}:{r[2][1]}</p>
    </div>
  );
};

Match.propTypes = {
  match: PropTypes.object.isRequired
};

export default Match;