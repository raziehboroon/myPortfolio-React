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
        <a href="https://github.com/raziehboroon" target="noopener">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="https://twitter.com/raziehboroon" target="noopener">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="mailto:razieh.boroon@gmail.com" target="noopener">
          <FontAwesomeIcon icon={["fas", "envelope"]} />
        </a>
      </div>
      <h4>
        <i className="far fa-copyright"></i>
        <span id="copyright-date">&copy;{getDate()}</span>
        <span className="footer-name"> Razieh Boroon.</span> all rights reserved
      </h4>
    </footer>
  );
};

export default Footer;
