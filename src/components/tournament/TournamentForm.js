import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import NumberInput from '../common/NumberInput';
import SelectInput from '../common/SelectInput';
import PasswordInput from '../common/PasswordInput';
import CheckboxGroup from '../common/CheckboxGroup';

const TournamentForm = ({ templateInfo, createInfo, players, onChange, onSave, onCancel, saving, errors }) => {
  const startDate = createInfo.startDate || (new Date()).toISOString().split('T')[0];
  const playersForDropdown = players.map(player => {
    return { value: player.id, text: player.name };
  });
  const playersForCheckBoxName = players.map(player => player.id);
  const playersForCheckBoxLabel = players.map(player =>
    player.name + " (" + player.fullName + ")");
  return (
    <form>
      <TextInput
        name="id"
        label="Turnier-Id"
        value={createInfo.id}
        placeholder="Wird als Dateiname zum Speichern verwendet"
        onChange={onChange}
        error={errors.id} />
      <TextInput
        name="name"
        label="Turnier-Name"
        value={createInfo.name}
        placeholder="Name für Spielplan und Ergebnislisten"
        onChange={onChange}
        error={errors.name} />
      <SelectInput
        name="createdBy"
        label="Erstellt von"
        value={createInfo.createdBy}
        defaultOption="Ersteller auswählen"
        options={playersForDropdown}
        onChange={onChange} error={errors.createdBy} />
      <DateInput
        name="startDate"
        label="Start-Datum"
        value={startDate}
        onChange={onChange}
        error={errors.startDate} />
      <NumberInput
        name="interval"
        label="Dauer pro Runde in Tagen"
        value={createInfo.interval}
        onChange={onChange}
        error={errors.interval} />
      <CheckboxGroup
        title="Turnier-Teilnehmer"
        name={playersForCheckBoxName}
        label={playersForCheckBoxLabel}
        checked={createInfo.participants}
        onChange={onChange}
      />
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