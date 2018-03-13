import React, { PropTypes } from 'react';
import Match from './Match';
import { ChangeMode, DisplayMode } from "./Schedule";

const Round = ({ index, round, change, display }) => {
  const startDate = (new Date(round.startDate)).toLocaleDateString();
  const endDate = (new Date(round.endDate)).toLocaleDateString();
  const labelType = "primary label";
  const nobreak = { "whiteSpace": "nowrap" };
  return (
    <div>
      <span style={nobreak}>
        <h5 className={labelType}>Runde {index} ({startDate} bis {endDate})&nbsp;
        {change == ChangeMode.modify &&
            <a className="small button" href="#0">Edit</a>}
        </h5>
      </span>
      <table className="table">
        <tbody>
          {round.matches.map((match, index) => 
          <Match match={match} key={index} change={change} display={display} />)}
        </tbody>
      </table>
    </div>
  );
};

Round.propTypes = {
  round: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  change: PropTypes.string,
  display: PropTypes.string
};

export default Round;