import React, { PropTypes } from 'react';

const TextInput = ({ name, label, placeholder, helpText, value,
  disabled = false, onChange, error }) => {
  const isDisabled = disabled ? "disabled" : "";
  return (
    <div className="small-12 columns">
      <label>{label}
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          aria-describedby={helpText}
          value={value}
          disabled={isDisabled}
          onChange={onChange} />
        {helpText && <p className="help-text" id="helpText">{helpText}</p>}
      </label>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default TextInput;