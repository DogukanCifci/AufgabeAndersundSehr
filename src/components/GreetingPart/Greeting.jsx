import React from "react";
import GreetingCards from "./GreetingCards.jsx";

//Data Import
import { data } from "../GreetingPart/data.js";
//Style Import
import "../../styles/greetingCards.scss";

const Greeting = () => {
  return (
    <div className="general-container">
      <div className="greeting-container">
        {data.map((element, index) => {
          return (
            <GreetingCards
              className="card-container"
              key={index}
              element={element}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Greeting;
