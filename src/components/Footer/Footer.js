import "./Footer.scss";
import React from "react";
import { getDate } from "../../helper/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/razieh-boroon/" target="noopener">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a href="https://github.com/raziehboroon" target="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="https://twitter.com/raziehboroon" target="noopener noreferrer">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="mailto:razieh.boroon@gmail.com" target="noopener noreferrer">
          <FontAwesomeIcon icon={["fas", "envelope"]} />
        </a>
      </div>
      <h4>
        <span>&copy;{getDate()}</span>
        <span className="footer-name"> Razieh Boroon.</span> all rights reserved
      </h4>
    </footer>
  );
};

export default Footer;
