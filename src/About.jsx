import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./images/new pic.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
