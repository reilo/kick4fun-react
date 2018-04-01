import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import Checkbox from '../common/Checkbox';
import PasswordInput from '../common/PasswordInput';

const PlayerForm = ({ player, isNew, onSave, onChange, onCancel, saving, errors }) => {
  const label = isNew ? "Neuen Spieler anlegen" : "Spieler bearbeiten";
  return (
    <div>
      <h5 className="primary label">{label}</h5>
      <form>
        <TextInput
          name="id"
          label="Id"
          value={player.id}
          placeholder="Wird automatisch generiert"
          helpText="Wird generiert und kann nicht verändert werden"
          onChange={onChange}
          disabled />
        <TextInput
          name="name"
          label="Kurzname"
          value={player.name}
          placeholder="Kurz- oder Spitzname"
          helpText="Kurzname oder Spitzname für Spielplan und Ergebnislisten"
          onChange={onChange}
          error={errors.name} />
        <TextInput
          name="fullName"
          label="Vollständiger Name"
          value={player.fullName}
          placeholder="Vor- und Nachname"
          helpText="Vollständiger Name mit Vornamen und Nachname"
          onChange={onChange}
          error={errors.fullName} />
        <Checkbox
          name="active"
          label="Aktiv - Spieler kann an Turnieren teilnehmen"
          checked={player.active}
          onChange={onChange} />
        <Checkbox
          name="real"
          label="Test - keine echte Person, nur zum Testen"
          checked={!player.real}
          onChange={onChange} />
        <PasswordInput
          name="password"
          label="Passwort"
          value={player.password}
          placeholder="Kickerliga-Admin-Passwort"
          helpText="Passwort des Kickerliga-Administrators"
          onChange={onChange}
          error={errors.password} />
        <button
          type="button"
          disabled={saving}
          className="button"
          onClick={onSave}>
          {saving ? 'Saving...' : 'Save'}
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

PlayerForm.propTypes = {
  player: PropTypes.object.isRequired,
  isNew: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default PlayerForm;