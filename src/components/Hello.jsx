import React from "react";
import { MyButton } from "../styles/ButtonStyle";
//Style Import
import "../styles/hello.scss";

const Hello = () => {
  return (
    <div className="hello-container container grid grid-cols-1 lg:grid-cols-2">
      <div className="description">
        <h1 className="title">Hello!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          explicabo magni vero, sint est non? Illo tempora in fugiat. Unde
          facilis deleniti enim laborum neque? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Id, amet?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Recusandae, maxime. Fugiat dolores
          debitis saepe quidem maxime perferendis ut voluptatibus rem!
        </p>

        <MyButton>Read More</MyButton>
      </div>
      <div className="hello-image">
        <img
          src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840__340.jpg"
          alt="helloPicture"
        />
      </div>
    </div>
  );
};

export default Hello;
