import "./SingleProject.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleProject = ({ image, name, description, git, netlify }) => {
  return (
    <div className="card">
      {/* <img src={"/assets/images/RaziehBoroon.jpg"} alt="harch" /> */}
      <div className="card-image-container">
        <img src={`${process.env.PUBLIC_URL}${image}`} alt={name} />
      </div>
      <div className="card-footer">
        <div>
          <h4>{name}</h4>
          <h5>{description}</h5>
        </div>
        <div className="project-links icons">
          <a href={git} target="noopener">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a href={netlify}>
            <FontAwesomeIcon icon={["fas", "external-link-alt"]} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
