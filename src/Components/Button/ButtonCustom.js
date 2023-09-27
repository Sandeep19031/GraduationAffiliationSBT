import React from "react";
import "./ButtonStyle.scss";

const ButtonCustom = ({ className, title, onClick }) => {
  
  return (
    <button
      type="button"
      className={`button-style ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonCustom;
