import "./Banner.scss";
import React from "react";

const Banner = () => {
  return (
    <header className="banner">
      <div
        className="banner-center section"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div className="banner-info">
          <h4>Hi, my name is</h4>
          <h1>Razieh Boroon</h1>
          <h4>I'm a Front End Developer.</h4>
          <div className="social-links icons">
            <a
              href="https://www.linkedin.com/in/razieh-boroon/"
              target="noopener"
            >
              <i className="fab fa-linkedin"> </i>
            </a>
            <a href="https://github.com/raziehboroon" target="noopener">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/raziehboroon" target="noopener">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="profile-img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/RaziehBoroon.jpg`}
            alt="myPicture"
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;
