import React from 'react';

const InputDropdown = ({
  dropdownElements,
  onChange,
  className,
  name,
  disabled,
}) => {
  return (
    <div className="my-2">
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
    </div>
  );
};

export default InputDropdown;
