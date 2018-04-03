import React, { PropTypes } from 'react';

const NumberInput = ({
  name, label, onChange, placeholder, helpText, value, error
}) => {
  return (
    <div className="small-12 columns">
      <label>{label}
        <input
          type="number"
          name={name}
          placeholder={placeholder}
          aria-describedby={helpText}
          value={value}
          onChange={onChange} />
        {helpText && <p className="help-text" id="helpText">{helpText}</p>}
      </label>
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  helpText: PropTypes.string,
  value: PropTypes.number,
  error: PropTypes.string
};

export default NumberInput;