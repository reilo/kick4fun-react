import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import DateInput from '../common/DateInput';
import NumberInput from '../common/NumberInput';
import SelectInput from '../common/SelectInput';
import PasswordInput from '../common/PasswordInput';
import CheckboxGroup from '../common/CheckboxGroup';

const UpdateTournamentForm = ({ tournament, players,
  onChange, onSave, onCancel, saving, errors }) => {
  const playersForDropdown = players.map(player => {
    return { value: player.id, text: player.name };
  });
  return (
    <form>
      <TextInput
        name="id"
        label="Turnier-Id"
        value={tournament.id}
        disabled
        helpText="Die Id kann nicht verändert werden."
        onChange={onChange}
        error={errors.id} />
      <TextInput
        name="name"
        label="Turnier-Name"
        value={tournament.name}
        placeholder="Eindeutiger Turnier-Name"
        helpText="Der Name wird für Spielplan und Ergebnislisten verwendet."
        onChange={onChange}
        error={errors.name} />
      <SelectInput
        name="createdBy"
        label="Erstellt von"
        value={tournament.createdBy}
        defaultOption={tournament.createdBy}
        options={playersForDropdown}
        onChange={onChange} error={errors.createdBy} />
      <PasswordInput
        name="password"
        label="Passwort"
        value={tournament.password}
        placeholder="Turnier-Admin-Passwort"
        helpText="Passwort des Turnier-Administrators"
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

UpdateTournamentForm.propTypes = {
  tournament: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
  errors: React.PropTypes.object
};

export default UpdateTournamentForm;