import React, { PropTypes } from 'react';
import { ChangeMode, DisplayMode } from './Schedule';

const Match = ({ tournament, roundId, matchId, change, display }) => {
  const match = tournament.rounds[roundId].matches[matchId];
  const p = match.player;
  const s = match.sets;
  const r = match.result;
  const pstr1 = p && p[0][0] + " & " + p[0][1];
  const pstr2 = p && p[1][0] + " & " + p[1][1];
  const sstr1 = s ? s[0] ? s[0][0] + ":" + s[0][1] : ""  : "-:-";
  const sstr2 = s ? s[1] ? s[1][0] + ":" + s[1][1] : "" : "-:-";
  const sstr3 = s ? s[2] ? s[2][0] + ":" + s[2][1] : "" : "-:-";
  const rstr = r ? r[0] + ":" + r[1] : "-:-";
  const date = new Date(match.date);
  const dateStr = isNaN(date.getTime()) ? "" : date.toLocaleDateString();
  const showDate = display == DisplayMode.allDetails && dateStr;
  const editUrl = "/match/" + tournament.id + "/" + roundId + "/" + matchId;
  return (
    <tr>
      {showDate && <td>{dateStr}</td>}
      <td>{pstr1}</td>
      <td>-</td>
      <td>{pstr2}</td>
      <td>{rstr}</td>
      <td>({sstr1}</td>
      <td>{sstr2}</td>
      <td>{sstr3})</td>
      {change == ChangeMode.modify &&
        <td><a className="small button tinyborder" href={editUrl}>Edit</a></td>
      }
    </tr>
  );
};

Match.propTypes = {
  tournament: PropTypes.object.isRequired,
  roundId: PropTypes.number.isRequired,
  matchId: PropTypes.number.isRequired,
  change: PropTypes.string,
  display: PropTypes.string
};

export default Match;