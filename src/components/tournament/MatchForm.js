import React, { PropTypes } from 'react';
import SelectInput from '../common/SelectInput';

const MatchForm = ({ match, loading }) => {
  const p = match.player;
  const s = match.sets;
  const defaultOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(option => {
    return {
      value: option,
      text: option
    };
  });
  return (
    <form>
      <h1>Spieleingabe</h1>
      <h5>{p[0][0]} &amp; {p[0][1]} - {p[1][0]} &amp; {p[1][1]}</h5>
      <SelectInput
        name="set11"
        label=""
        value={s[0][0].toString()}
        defaultOption="0"
        options={defaultOptions} />
      <SelectInput
        name="set12"
        label=""
        value={s[0][1].toString()}
        defaultOption="0"
        options={defaultOptions} />
      <SelectInput
        name="set21"
        label=""
        value={s[1][0].toString()}
        defaultOption="0"
        options={defaultOptions} />
      <SelectInput
        name="set22"
        label=""
        value={s[1][1].toString()}
        defaultOption="0"
        options={defaultOptions} />
      <SelectInput
        name="set31"
        label=""
        value={s[2][0].toString()}
        defaultOption="0"
        options={defaultOptions} />
      <SelectInput
        name="set32"
        label=""
        value={s[2][1].toString()}
        defaultOption="0"
        options={defaultOptions} />
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
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool//.isRequired
};

export default MatchForm;