import React, { PropTypes } from 'react';
import Match from './Match';
import { ChangeMode, DisplayMode } from "./Schedule";

const Round = ({ tournament, roundId, change, display }) => {
  const round = tournament.rounds[roundId];
  const startDate = new Date(round.startDate);
  const endDate = new Date(round.endDate);
  const sstr = isNaN(startDate.getTime()) ? "" : startDate.toLocaleDateString();
  const estr = isNaN(startDate.getTime()) ? "" : endDate.toLocaleDateString();
  const dateStr = sstr || estr ? "(" + sstr + " bis " + estr + ")" : "";
  const labelType = "primary label";
  const nobreak = { "whiteSpace": "nowrap" };
  const editUrl = "/round/" + tournament.id + "/" + roundId;
  return (
    <div>
      <span style={nobreak}>
        <h5 className={labelType}>Runde {roundId + 1} {dateStr}&nbsp;
        {change == ChangeMode.modify &&
            <a className="small button noborder" href={editUrl}>Edit</a>}
        </h5>
      </span>
      <table className="table">
        <tbody>
          {round.matches.map((match, index) =>
            <Match
              key={index}
              tournament={tournament}
              roundId={roundId}
              matchId={index}
              change={change}
              display={display} />)}
        </tbody>
      </table>
    </div>
  );
};

Round.propTypes = {
  tournament: PropTypes.object.isRequired,
  roundId: PropTypes.number.isRequired,
  change: PropTypes.string,
  display: PropTypes.string
};

export default Round;