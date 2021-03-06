import React, { useRef } from 'react';

const InputField = ({
  type,
  id,
  name,
  value,
  onChange,
  onClick,
  disabled,
  className,
  placeholder,
  onFocus,
  onBlur,
  style,
  defaultValue,
  ...restProps
}) => {
  const refs = useRef(null);
  return (
      <input
        type={type}
        ref={refs}
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onClick={onClick}
        defaultValue={defaultValue}
        style={style}
        {...restProps}
      />
  );
};

export default InputField;
