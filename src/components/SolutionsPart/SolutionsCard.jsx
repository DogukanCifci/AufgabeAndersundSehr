import React from "react";
//Style Import
import "../../styles/solutions.scss";

const SolutionsCard = ({ element }) => {
  //Destructing
  const { title, description } = element;

  return (
    <div className="solution-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SolutionsCard;
