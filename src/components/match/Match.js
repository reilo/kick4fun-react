import React, { PropTypes } from 'react';

const Match = ({ match, editUrl, editMode, showDetails, mirror, highlighting = [] }) => {

  const p = match.player;
  const s = match.sets;
  const r = match.result;

  const subst = (match.substitute || []).reduce((res, cur) =>
    Object.assign(res, { [cur[0]]: cur[1] })
    , {});

  const reverse = mirror && (r[0] < r[1]);
  let left = "", right = "";

  let pstr = [];
  let style = [];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      pstr.push(p && p[i][j] + (subst[p[i][j]] ? "*" : ""));
      style.push(p && highlighting.indexOf(p[i][j]) > -1 ?
        { backgroundColor: "lightblue" } : {});
    }
  }
  reverse && pstr.reverse();
  reverse && style.reverse();

  let sstr = [];
  for (let i = 0; i < 3; i++) {
    left = s && s[i] ? s[i][0] : "-";
    right = s && s[i] ? s[i][1] : "-";
    sstr.push(reverse ? right + ":" + left : left + ":" + right);
  }

  left = r ? r[0] : "-";
  right = r ? r[1] : "-";
  const rstr = reverse ? right + ":" + left : left + ":" + right;

  const date = new Date(match.date);
  const dateStr = isNaN(date.getTime()) ? "" : date.toLocaleDateString();


  return (
    <tr>
      {showDetails && <td>{dateStr}</td>}
      <td style={style[0]}>{pstr[0]}</td>
      <td>&amp;</td>
      <td style={style[1]}>{pstr[1]}</td>
      <td>-</td>
      <td style={style[2]}>{pstr[2]}</td>
      <td>&amp;</td>
      <td style={style[3]}>{pstr[3]}</td>
      <td>{rstr}</td>
      <td>({sstr[0]}</td>
      <td>{sstr[1]}</td>
      <td>{sstr[2]})</td>
      {editMode && <td><a
        className="small button tinyborder"
        href={editUrl}>Edit</a></td>
      }
    </tr>
  );
};

Match.propTypes = {
  match: PropTypes.object.isRequired,
  editUrl: PropTypes.string,
  editMode: PropTypes.bool,
  showDetails: PropTypes.bool,
  mirror: PropTypes.bool,
  highlighting: PropTypes.array
};

export default Match;