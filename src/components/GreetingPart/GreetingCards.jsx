import React from "react";
import { MyButton } from "../../styles/ButtonStyle";
import "../../styles/greetingCards.scss";

const GreetingCards = ({ element }) => {
  const { title, icon, description } = element;
  return (
    <div className="cards">
      <div className="card-icon">
        <img src={icon} alt="" />
      </div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <MyButton typeof="button">Read More</MyButton>
    </div>
  );
};

export default GreetingCards;
