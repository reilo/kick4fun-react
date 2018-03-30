import React, { PropTypes } from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import PasswordInput from '../common/PasswordInput';

const MatchForm = ({ match, onChange, onSave, onCancel, roundId, matchId, saving, errors }) => {
  const p = match.player;
  const s = match.sets;
  const defaultOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => {
    return { value: num, text: num.toString() };
  });
  return (
    <div>
      <form>
        <h5 className="primary label">Spieleingabe: Runde {roundId + 1} - Spiel {matchId + 1}</h5>
        <DateInput
          name="date"
          label="Spieldatum"
          value={match.date}
          onChange={onChange}
          error={errors.date} />
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
                  name="set_0_0"
                  label=""
                  value={s ? s[0][0].toString() : "0"}
                  defaultOption="0"
                  options={defaultOptions}
                  onChange={onChange}
                  error={errors.set_0_0} />
              </td>
              <td>
                <SelectInput
                  name="set_1_0"
                  label=""
                  value={s ? s[1][0].toString() : "0"}
                  defaultOption="0"
                  options={defaultOptions}
                  onChange={onChange}
                  error={errors.set_1_0} />
              </td>
              <td>
                <SelectInput
                  name="set_2_0"
                  label=""
                  value={s ? s[2][0].toString() : "0"}
                  defaultOption="0"
                  options={defaultOptions}
                  onChange={onChange}
                  error={errors.set_2_0} />
              </td>
            </tr>
            <tr>
              <td>{p[1][0]} &amp; {p[1][1]}</td>
              <td>
                <SelectInput
                  name="set_0_1"
                  label=""
                  value={s ? s[0][1].toString() : "0"}
                  defaultOption="0"
                  options={defaultOptions}
                  onChange={onChange}
                  error={errors.set_0_1} />
              </td>
              <td>
                <SelectInput
                  name="set_1_1"
                  label=""
                  value={s ? s[1][1].toString() : "0"}
                  defaultOption="0"
                  options={defaultOptions}
                  onChange={onChange}
                  error={errors.set_1_1} />
              </td>
              <td>
                <SelectInput
                  name="set_2_1"
                  label=""
                  value={s ? s[2][1].toString() : "0"}
                  defaultOption="0"
                  options={defaultOptions}
                  onChange={onChange}
                  error={errors.set_2_1} />
              </td>
            </tr>
          </tbody>
        </table>
        <PasswordInput
          name="password"
          label="Passwort"
          value={match.password}
          onChange={onChange}
          error={errors.password} />
        <button
          type="button"
          disabled={saving || Object.keys(errors).length}
          className="button"
          onClick={onSave}>
          {saving ? 'Speichern...' : 'Speichern'}
        </button>
        <button
          type="button"
          disabled={false}
          className="button"
          onClick={onCancel}>
          {'Abbrechen'}
        </button>
      </form>
    </div>
  );
};

MatchForm.propTypes = {
  match: PropTypes.object.isRequired,
  roundId: PropTypes.number.isRequired,
  matchId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: React.PropTypes.object
};

export default MatchForm;