import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { data } from "./data";
//Style Import
import EventsCards from "./EventsCards";

const Events = () => {
  const { setOpen } = useContext(AuthContext);

  return (
    <div
      className="container event-container text-center md:text-left"
      id="blogs"
      onClick={() => setOpen(false)}
    >
      <h1 className="title mb-12">News & events</h1>
      <div className="cards-container grid grid-cols-1 md:grid-cols-3">
        {data.map((element, index) => {
          return <EventsCards key={index} element={element} />;
        })}
      </div>
    </div>
  );
};

export default Events;
