import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import Checkbox from '../common/Checkbox';
import PasswordInput from '../common/PasswordInput';

const PlayerForm = ({ player, isNew, onSave, onChange, onCancel, loading, errors }) => {
  const label = isNew ? "Neuen Spieler anlegen" : "Spieler bearbeiten";
  const disabled = !isNew;
  return (
    <div>
      <form>
        <h5 className="primary label">{label}</h5>
        <TextInput
          name="id"
          label="Id"
          value={player.id}
          disabled={disabled}
          onChange={onChange}
          error={errors.id} />
        <TextInput
          name="name"
          label="Kurzname"
          value={player.name}
          onChange={onChange}
          error={errors.name} />
        <TextInput
          name="fullName"
          label="Vollständiger Name"
          value={player.fullName}
          onChange={onChange}
          error={errors.fullName} />
        <Checkbox
          name="active"
          label="aktiv"
          checked={player.active}
          onChange={onChange} />
        <Checkbox
          name="real"
          label="Reale Person"
          checked={player.real}
          onChange={onChange} />
        <PasswordInput
          name="password"
          label="Admin-Passwort"
          value={player.password}
          onChange={onChange}
          error={errors.password} />
        <button
          type="button"
          disbled={loading}
          className="button"
          onClick={onSave}>
          {loading ? 'Saving...' : 'Save'}
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
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default PlayerForm;