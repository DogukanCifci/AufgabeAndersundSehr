import React from "react";
import { MyButton } from "../../styles/ButtonStyle";
//Style Import
import "../../styles/Events.scss";

const EventsCards = ({ element }) => {
  //Destructing
  const { date, month, title, description } = element;
  return (
    <div>
      <div className="header">
        <div className="datum">
          <p className="date">{date}</p>
          <p className="month">{month}</p>
        </div>
        <div className="card-title">{title}</div>
      </div>
      <div className="card-body w-full md:w-[55%]">{description}</div>
      <MyButton>Read More</MyButton>
    </div>
  );
};

export default EventsCards;
