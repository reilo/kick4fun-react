import React, { PropTypes } from 'react';
import Match from './Match';

const MatchList = ({ matches, count = 0 }) => {
  const labelType = "primary label";
  const nobreak = { "whiteSpace": "nowrap" };
  return (
    <div>
      <table className="table">
        <tbody>
          {matches && matches.map((match, index) => (count == 0 || index < count) &&
            <Match
              key={index}
              match={match}
              mirror />)}
        </tbody>
      </table>
    </div>
  );
};

MatchList.propTypes = {
  matches: PropTypes.array.isRequired,
  count: PropTypes.number
};

export default MatchList;