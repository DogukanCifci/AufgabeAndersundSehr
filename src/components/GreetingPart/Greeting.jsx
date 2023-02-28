import React from "react";
import GreetingCards from "./GreetingCards.jsx";

//Data Import
import { data } from "../GreetingPart/data.js";
//Style Import
import "../../styles/greetingCards.scss";

const Greeting = () => {
  return (
    <div className="general-container border  ">
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-0">
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
