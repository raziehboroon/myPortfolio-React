import "./About.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageFrame from "../ImageFrame/ImageFrame";

const About = ({ height }) => {
  // const height = props.height;
  const skills = [
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "JavaScript (ES6+)",
    "React.js",
    "Redux",
    "VSCode",
    "Git",
  ];
  return (
    <section className={`about ${height && "max-height"}`}>
      <div className="section">
        <div className="about-content">
          <div className="about-image">
            {/* <img
              src={`${process.env.PUBLIC_URL}/assets/images/keyboard.jpg`}
              alt="keyboard"
            /> */}
            <ImageFrame
              src={`${process.env.PUBLIC_URL}/assets/images/keyboard.jpg`}
              name="keyboard"
              alignment={false}
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
                  <FontAwesomeIcon
                    icon={["fas", "caret-right"]}
                    className="icon"
                  />
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
