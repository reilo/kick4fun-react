import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import PasswordInput from '../common/PasswordInput';

const TournamentForm = ({ templateInfo, createInfo, players, onChange, onSave, onCancel, saving, errors }) => {
  const startDate = createInfo.startDate || (new Date()).toISOString().split('T')[0];
  return (
    <form>
      <TextInput
        name="id"
        label="Turnier-Id"
        value={createInfo.id}
        onChange={onChange}
        error={errors.id} />
      <TextInput
        name="name"
        label="Turnier-Name"
        value={createInfo.name}
        onChange={onChange}
        error={errors.name} />
      <SelectInput
        name="createdBy"
        label="Erstellt von"
        value={createInfo.createdBy}
        defaultOption="Auswählen"
        options={players}
        onChange={onChange} error={errors.createdBy} />
      <TextInput
        name="startDate"
        label="Start-Datum"
        value={startDate}
        onChange={onChange}
        error={errors.startDate} />
      <PasswordInput
        name="password"
        label="Admin-Passwort"
        value={createInfo.password}
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

TournamentForm.propTypes = {
  templateInfo: PropTypes.object.isRequired,
  createInfo: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: React.PropTypes.object
};

export default TournamentForm;