import React from "react";
import "./LayoutCard.scss";

const LayoutCard = ({ title, children }) => {
  return (
    <div className="layout-card">
      {title && <h2 className="layout-card__title">{title}</h2>}
      <div className="layout-card__inner">{children}</div>
    </div>
  );
};

export default LayoutCard;
