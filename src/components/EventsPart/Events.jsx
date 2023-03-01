import React from "react";
import { data } from "./data";
//Style Import
import EventsCards from "./EventsCards";

const Events = () => {
  return (
    <div className="container event-container" id="blogs">
      <h1 className="title">News & events</h1>
      <div className="cards-container grid grid-cols-1 md:grid-cols-3 text-center md:text-left pb-12 md:pb-0">
        {data.map((element, index) => {
          return <EventsCards key={index} element={element} />;
        })}
      </div>
    </div>
  );
};

export default Events;
