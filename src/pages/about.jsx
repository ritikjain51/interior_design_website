import React from "react";

import Address from "../components/Address";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
const About = () => {
  return (
    <div>
      <Hero
      title="About Us"
      subtitle=""
      description=""
      class_name="main_image"
      />

      <Address />
      <Footer />
    </div>
  )
};

export default About;