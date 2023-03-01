import React from "react";
//Style import
import "../../styles/solutions.scss";

//Solutions Data Import
import { data } from "./data.js";
import SolutionsCard from "./SolutionsCard";

const Solutions = () => {
  return (
    <div className="solutions-container container">
      <div id="solutions"></div>
      <h1 className="title text-center md:text-left">Solutions</h1>
      <div className="solution-cards-container grid grid-cols-1 md:grid-cols-2 text-center md:text-left pb-12 md:pb-0">
        {data.map((element, index) => {
          return <SolutionsCard key={index} element={element} />;
        })}
      </div>
    </div>
  );
};

export default Solutions;
