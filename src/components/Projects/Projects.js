import "./Projects.scss";
import React from "react";
import { data } from "../../data.js";
import { Link } from "react-router-dom";
import SingleProject from "../SingleProject/SingleProject";

const Projects = ({ height }) => {
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
        {height && (
          <button className="home-btn">
            <Link to="/">back to home</Link>
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
