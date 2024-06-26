import React from "react";

import Address from "../components/Address";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Enquiry from "../components/Enquiry";
import samyak from "../assets/team_samyak.png";

const Team = () => {
  return (
    <div className="w-full">
      <Hero
        title="Exuberant Team"
        subtitle=""
        description="Designing with grace, building with purpose – where every eco-friendly choice is a step towards a sustainable future."
        class_name="main_image"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
        <div className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between">
          <img
            src={samyak}
            alt="Samyak Jain"
            className="w-full h-100  object-cover mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Samyak Jain</h2>
          <p className="text-gray-600">Founder</p>
          <p className="mt-4 text-gray-600">
          Our visionary founder, brings over 5 years of expertise in interior design and construction to Grace Decor. His keen eye for detail and deep understanding of creating harmonious structures allow him to blend innovative design with exceptional functionality. Samyak's passion for transforming spaces into elegant, sustainable environments inspires every project, ensuring each client receives personalized, world-class service.
          </p>
        </div>

      </div>
      <Enquiry />
      <Address />
      <Footer />
    </div>
  )
};

export default Team;