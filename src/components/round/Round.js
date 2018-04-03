import React, { PropTypes } from 'react';
import Match from '../match/Match';

const Round = ({ tournament, roundId, editMode, showDetails, highlighting }) => {
  const round = tournament.rounds[roundId];
  const startDate = new Date(round.startDate);
  const endDate = new Date(round.endDate);
  const sstr = isNaN(startDate.getTime()) ? "" : startDate.toLocaleDateString();
  const estr = isNaN(startDate.getTime()) ? "" : endDate.toLocaleDateString();
  const dateStr = sstr || estr ?
    sstr == estr ? "(" + sstr + ")" : "(" + sstr + " bis " + estr + ")" : "";
  const labelType = "primary label";
  const nobreak = { "whiteSpace": "nowrap" };
  const editUrl = "/round/" + tournament.id + "/" + roundId;
  return (
    <div>
      <span style={nobreak}>
        <h5 className={labelType}>Runde {roundId + 1} {dateStr}&nbsp;
        {editMode && <a className="small button noborder" href={editUrl}>Edit</a>}
        </h5>
      </span>
      <table className="table">
        <tbody>
          {round.matches.map((match, index) =>
            <Match
              key={index}
              match={match}
              editUrl={"/match/" + tournament.id + "/" + roundId + "/" + index}
              editMode={editMode}
              showDetails={showDetails}
              highlighting={highlighting} />
          )}
        </tbody>
      </table>
    </div>
  );
};

Round.propTypes = {
  tournament: PropTypes.object.isRequired,
  roundId: PropTypes.number.isRequired,
  editMode: PropTypes.bool,
  showDetails: PropTypes.bool,
  highlighting: PropTypes.array
};

export default Round;