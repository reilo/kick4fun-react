import React, { PropTypes } from 'react';

const TextInput = ({ name, label, onChange, placeholder, value, error }) => {
  return (
    <div>
      <label>{label}
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          aria-describedby="errorText"
          value={value}
          onChange={onChange} />
        {error && <p className="help-text" id="errorText">{error}</p>}
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
  error: PropTypes.string
};

export default TextInput;