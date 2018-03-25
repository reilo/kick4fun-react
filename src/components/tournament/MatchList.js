import React, { PropTypes } from 'react';
import Match from './Match';

const MatchList = ({ matches, count }) => {
  const labelType = "primary label";
  const nobreak = { "whiteSpace": "nowrap" };
  return (
    <div>
      <table className="table">
        <tbody>
          {matches && matches.map((match, index) => index < count &&
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
  count: PropTypes.number.isRequired
};

export default MatchList;