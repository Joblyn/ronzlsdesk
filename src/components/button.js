import React from "react";

const Button = ({ className, onClick, value, buttonIcon }) => {
  return (
    <button className={className} onClick={onClick}>
      {buttonIcon}
      {value}
    </button>
  );
};
export default Button;
