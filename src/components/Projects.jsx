import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
//Style Import
import "../styles/projects.scss";

const Projects = () => {
  const { setOpen } = useContext(AuthContext);

  return (
    <div
      className="projects-container"
      id="projects"
      onClick={() => setOpen(false)}
    >
      <h1 className="our-project title container">Our Projects</h1>
      <div className="project-images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <img
          src="https://cdn.pixabay.com/photo/2017/04/24/13/37/architecture-2256489__480.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__480.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/03/26/16/06/exzenterhaus-2175925__480.jpg"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Projects;
