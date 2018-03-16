import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';

const RoundForm = ({ round, onChange, onSave, roundId, loading }) => {
  return (
    <form>
      <h5 className="primary label">Bearbeiten: Runde {roundId + 1} - Details</h5>
      <TextInput
        name="startDate"
        label="Start-Datum"
        value={round.startDate}
        onChange={onChange} />
      <TextInput
        name="endDate"
        label="End-Datum"
        value={round.endDate}
        onChange={onChange} />
      <button
        type="button"
        disbled={loading}
        className="button"
        onClick={onSave}>
        {loading ? 'Speichern...' : 'Speichern'}
      </button>
    </form>
  );
};

RoundForm.propTypes = {
  round: PropTypes.object.isRequired,
  roundId: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  loading: PropTypes.bool//.isRequired
};

export default RoundForm;