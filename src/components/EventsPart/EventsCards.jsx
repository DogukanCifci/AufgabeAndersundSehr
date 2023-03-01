import React from "react";
import { MyButton } from "../../styles/ButtonStyle";
//Style Import
import "../../styles/Events.scss";

const EventsCards = ({ element }) => {
  //Destructing
  const { date, month, title, description } = element;
  return (
    <div>
      <div className="header text-center md:text-left pb-12 md:pb-0">
        <div className="datum text-center md:text-left pb-12 md:pb-0">
          <p className="date">{date}</p>
          <p className="month">{month}</p>
        </div>
        <div className="card-title">{title}</div>
      </div>
      <div className="card-body w-full md:w-[55%]">{description}</div>
      <MyButton className="event-button" type="button">
        Read More
      </MyButton>
    </div>
  );
};

export default EventsCards;
