import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import NumberInput from '../common/NumberInput';
import SelectInput from '../common/SelectInput';
import PasswordInput from '../common/PasswordInput';
import CheckboxGroup from '../common/CheckboxGroup';

const CreateTournamentForm = ({ templateInfo, createInfo, players,
  onChange, onSave, onCancel, saving, errors }) => {
  const startDate = createInfo.startDate ||
    (new Date()).toISOString().split('T')[0];
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
        placeholder="Eindeutige Turnier-Id"
        helpText="Die Id wird als Dateiname (plus Dateierweiterung) zum Speichern verwendet."
        onChange={onChange}
        error={errors.id} />
      <TextInput
        name="name"
        label="Turnier-Name"
        value={createInfo.name}
        placeholder="Eindeutiger Turnier-Name"
        helpText="Der Name wird für Spielplan und Ergebnislisten verwendet."
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
        helpText="Die erste Spielrunde startet an diesem Tag."
        onChange={onChange}
        error={errors.startDate} />
      <NumberInput
        name="interval"
        label="Dauer einer Spielrunde in Tagen"
        value={createInfo.interval}
        helpText="Die Termine des initialen Spielplans werden entsprechend erstellt."
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
        label="Passwort"
        value={createInfo.password}
        placeholder="Turnier-Admin-Passwort"
        helpText="Wähle ein Passwort für die Turnier-Administration. Es kann auch leer sein."
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

CreateTournamentForm.propTypes = {
  templateInfo: PropTypes.object.isRequired,
  createInfo: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: React.PropTypes.object
};

export default CreateTournamentForm;