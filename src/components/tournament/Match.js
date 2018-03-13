import React, { PropTypes } from 'react';
import { ChangeMode, DisplayMode } from './Schedule';

const Match = ({ match, change, display }) => {
  const p = match.player;
  const s = match.sets;
  const r = match.result;
  const pstr1 = p && p[0][0] + " & " + p[0][1];
  const pstr2 = p && p[1][0] + " & " + p[1][1];
  const sstr1 = s ? s[0][0] + ":" + s[0][1] : "-:-";
  const sstr2 = s ? s[1][0] + ":" + s[1][1] : "-:-";
  const sstr3 = s ? s[2][0] + ":" + s[2][1] : "-:-";
  const rstr = r ? r[0] + ":" + r[1] : "-:-";
  const date = (new Date(match.date)).toLocaleDateString();
  return (
    <tr>
      {display == DisplayMode.allDetails && <td>{date}</td>}
      <td>{pstr1}</td>
      <td>-</td>
      <td>{pstr2}</td>
      <td>{rstr}</td>
      <td>( {sstr1}</td>
      <td>{sstr2}</td>
      <td>{sstr3} )</td>
      {change == ChangeMode.modify &&
        <td><a className="small button" href="#0">Edit</a></td>
      }
    </tr>
  );
};

Match.propTypes = {
  match: PropTypes.object.isRequired,
  change: PropTypes.string,
  display: PropTypes.string
};

export default Match;