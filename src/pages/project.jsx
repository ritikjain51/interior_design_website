import React from "react";

import Footer from "../components/Footer";
import Address from "../components/Address";
import Hero from "../components/Hero";
import Enquiry from "../components/Enquiry";
import ProjectsTab from "../components/portfolio";
const Project = () => {
  return (
    <div className="w-full">
      <Hero
      title="Projects"
      subtitle=""
      description=""
      class_name="main_image"
      />
      <ProjectsTab />
      <Enquiry />
      <Address />
      <Footer />
    </div>

  )
};

export default Project;