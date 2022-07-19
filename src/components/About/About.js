import "./About.scss";
import React from "react";

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "SASS",
    "Bootstrap",
    "JavaScript (ES6+)",
    "React.js",
    "VSCode",
    "Git",
  ];
  return (
    <section className="about">
      <div className="section">
        <div className="about-content">
          <div
            className="profile-img about-img"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/keyboard.jpg`}
              alt="keyboard"
            />
          </div>

          <div className="about-text">
            {/* title */}
            <div className="title">
              <h2>about</h2>
              <div className="title-underline"></div>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000">
              Hello! My name is Razieh, I have master degree in Information
              Technology Engineering. I'm able to work with the following
              technologies:
            </p>
            <ul
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {skills.map((skill, index) => (
                <li key={index}>
                  <i className="fas fa-caret-right"></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
