import React from "react";

const Button = ({ className, onClick, value, buttonIcon, style}) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {buttonIcon}
      {value}
    </button>
  );
};
export default Button;
