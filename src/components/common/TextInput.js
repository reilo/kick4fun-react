import React, { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, disabled = false, error }) => {
  const errorText = "errorText_" + name;
  const isDisabled = disabled ? "disabled" : "";
  return (
    <div className="small-12 columns">
      <label>{label}
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          aria-describedby={errorText}
          value={value}
          disabled = {isDisabled}
          onChange={onChange} />
        {error && <p className="help-text" id={errorText}>{error}</p>}
      </label>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
  error: PropTypes.string
};

export default TextInput;