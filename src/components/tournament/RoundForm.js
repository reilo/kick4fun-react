import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import PasswordInput from '../common/PasswordInput';

const RoundForm = ({ round, onChange, onSave, onCancel, roundId, saving, errors }) => {
  return (
    <form>
      <h5 className="primary label">Bearbeiten: Runde {roundId + 1} - Details</h5>
      <DateInput
        name="startDate"
        label="Start-Datum"
        value={round.startDate}
        onChange={onChange}
        error={errors.startDate} />
      <DateInput
        name="endDate"
        label="End-Datum"
        value={round.endDate}
        onChange={onChange}
        error={errors.endDate} />
      <PasswordInput
        name="password"
        label="Passwort"
        value={round.password}
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
  );
};

RoundForm.propTypes = {
  round: PropTypes.object.isRequired,
  roundId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: React.PropTypes.object
};

export default RoundForm;