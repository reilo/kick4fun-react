import React, { PropTypes } from 'react';

const CheckboxGroup = ({ title, name, label, checked, onChange }) => {
  let checkboxes = [];
  checkboxes.push(React.createElement('legend', { key: title }, title));
  for (let i = 0; i < name.length; i++) {
    checkboxes.push(React.createElement('input', {
      type: 'checkbox',
      name: 'checkbox_' + name[i],
      checked: checked.indexOf(name[i]) > -1,
      onChange: onChange,
      key: name[i] + "1"
    }));
    checkboxes.push(React.createElement('label', {
      htmlFor: 'checkbox_' + name[i],
      key: name[i] + "2"
    }, label[i]));
    checkboxes.push(React.createElement('br', { key: name[i] + "3" }));
  }
  return React.createElement('div', {
    className: "small-12 columns"
  }, checkboxes);
};

CheckboxGroup.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.array.isRequired,
  label: PropTypes.array.isRequired,
  checked: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CheckboxGroup;