import "./Home.scss";
import React from "react";
// Components
import Banner from "../Banner/Banner";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
