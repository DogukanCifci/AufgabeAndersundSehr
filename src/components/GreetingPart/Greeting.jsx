import React from "react";
import GreetingCards from "./GreetingCards.jsx";

//Data Import
import { data } from "../GreetingPart/data.js";
//Style Import
import "../../styles/greetingCards.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider.jsx";

const Greeting = () => {
  const { setOpen } = useContext(AuthContext);

  return (
    <div className="general-container" onClick={() => setOpen(false)}>
      <div className="container card-outside grid grid-cols-1 gap-4 md:grid-cols-3 text-center align-middle px-6 lg:px-0">
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
