import React, { PropTypes } from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

const MatchForm = ({ tournament, match, onChange, roundId, matchId, loading }) => {
  const p = match.player;
  const s = match.sets;
  const defaultOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => {
    return { value: num, text: num.toString() };
  });
  return (
    <form>
      <h5 className="primary label">Spieleingabe: Runde {roundId + 1} - Spiel {matchId + 1}</h5>
      <TextInput
        name="date"
        label="Spieldatum"
        value={match.date}
        onChange={onChange} />
      <table className="table">
        <thead>
          <tr>
            <td>Spieler</td>
            <td>Satz 1</td>
            <td>Satz 2</td>
            <td>Satz 3</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{p[0][0]} &amp; {p[0][1]}</td>
            <td>
              <SelectInput
                name="set-0-0"
                label=""
                value={s ? s[0][0].toString() : "0"}
                defaultOption="0"
                options={defaultOptions}
                onChange={onChange} />
            </td>
            <td>
              <SelectInput
                name="set-1-0"
                label=""
                value={s ? s[1][0].toString() : "0"}
                defaultOption="0"
                options={defaultOptions}
                onChange={onChange} />
            </td>
            <td>
              <SelectInput
                name="set-2-0"
                label=""
                value={s ? s[2][0].toString() : "0"}
                defaultOption="0"
                options={defaultOptions}
                onChange={onChange} />
            </td>
          </tr>
          <tr>
            <td>{p[1][0]} &amp; {p[1][1]}</td>
            <td>
              <SelectInput
                name="set-0-1"
                label=""
                value={s ? s[0][1].toString() : "0"}
                defaultOption="0"
                options={defaultOptions}
                onChange={onChange} />
            </td>
            <td>
              <SelectInput
                name="set-1-1"
                label=""
                value={s ? s[1][1].toString() : "0"}
                defaultOption="0"
                options={defaultOptions}
                onChange={onChange} />
            </td>
            <td>
              <SelectInput
                name="set-2-1"
                label=""
                value={s ? s[2][1].toString() : "0"}
                defaultOption="0"
                options={defaultOptions}
                onChange={onChange} />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        disbled={loading}
        className="button">
        {loading ? 'Speichern...' : 'Speichern'}
      </button>
    </form>
  );
};

MatchForm.propTypes = {
  tournament: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  roundId: PropTypes.number.isRequired,
  matchId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool//.isRequired
};

export default MatchForm;