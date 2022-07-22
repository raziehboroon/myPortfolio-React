import "./Projects.scss";
import React from "react";
import { data } from "../../data.js";
import SingleProject from "../SingleProject/SingleProject";

const Projects = () => {
  return (
    <section className="projects">
      <div className="section">
        <div className="title">
          <h2>Project</h2>
          <div className="title-underline"></div>
        </div>
        <div className="card-container">
          {data.map((item) => (
            <SingleProject key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
