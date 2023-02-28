import React from "react";
//Style Import
import "../styles/projects.scss";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="our-project title container">Our Projects</h1>
      <div className="project-images grid grid-cols-2 md:grid-cols-4 ">
        <img
          src="https://cdn.pixabay.com/photo/2023/01/22/13/46/swans-7736415__340.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2023/01/27/06/17/pheasant-7747830__340.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2023/02/14/22/12/birds-7790506__340.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2023/02/03/15/27/bird-7765384__340.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Projects;
