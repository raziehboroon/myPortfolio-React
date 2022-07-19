import "./Footer.scss";
import React from "react";
import { getDate } from "../../helper/functions";

const Footer = () => {
  return (
    <footer>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/razieh-boroon/" target="noopener">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/raziehboroon" target="noopener">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/raziehboroon" target="noopener">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="mailto:razieh.boroon@gmail.com" target="noopener">
          <i className="fas fa-envelope"></i>
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
