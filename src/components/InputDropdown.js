import React from 'react';

const InputDropdown = ({
  dropdownElements,
  onChange,
  className,
  name,
  disabled,
  required,
}) => {
  return (
    <div className="my-2 d-flex">
      <select
        onChange={onChange}
        className={className}
        name={name}
        disabled={disabled}
      >
        {/* <option value="select" selected>
          Select an option
        </option> */}
        {dropdownElements}
      </select>
      {required && <span style={{float:'right', color:'red', marginLeft:2}}>*</span>}
    </div>
  );
};

export default InputDropdown;
