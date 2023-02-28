import React from "react";
//Style Import
import "../../styles/solutions.scss";

const SolutionsCard = ({ element }) => {
  //Destructing
  const { title, description } = element;

  return (
    <div className="solution-card">
      <h3>{title}</h3>
      <p className="text-[13px] w-full md:w-[60%]">{description}</p>
    </div>
  );
};

export default SolutionsCard;
