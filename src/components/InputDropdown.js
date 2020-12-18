import React from 'react';

const InputDropdown = ({
  dropdownElements,
  onChange,
  className,
  name,
  disabled,
  required,
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
      {required && <span style={{float:'right', color:'red', marginLeft:2}}>*</span>}
    </div>
  );
};

export default InputDropdown;
