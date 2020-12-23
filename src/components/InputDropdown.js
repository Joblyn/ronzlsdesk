import React from 'react';

const InputDropdown = ({
  dropdownElements,
  onChange,
  className,
  name,
  disabled,
  style,
  userProfile,
  dropdownElementsUser
}) => {
  return (
    <div className={`${userProfile && 'w-100'} my-2 d-flex`}>
      <select
        onChange={onChange}
        className={className}
        name={name}
        disabled={disabled}
        style={style}
      >
        {dropdownElements && dropdownElements}
        {dropdownElementsUser && dropdownElementsUser()}
      </select>
    </div>
  );
};

export default InputDropdown;
