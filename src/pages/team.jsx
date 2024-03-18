import React from "react";

import Address from "../components/Address";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Enquiry from "../components/Enquiry";
const Team = () => {
  return (
    <div className="w-full">
      <Hero
        title="Exuberant Team"
        subtitle=""
        description="- Ullam, tenetur aliqua nibh pretium potenti habitantelit irure quas
      eligendi, tempore torquent lectus dolore!"
        class_name="main_image"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
        <div className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between">
          <img
            src="https://via.placeholder.com/300x200?text=Samyak+Jain"
            alt="Samyak Jain"
            className="w-full h-40 object-cover mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Samyak Jain</h2>
          <p className="text-gray-600">Founder</p>
          <p className="mt-4 text-gray-600">
            Suscipit blandit adipisci conubia omnis Rerum? Montes sint temporibus
            iaculis eos dui ullamco torquent, officia dolore rerum semper sint.
            Cupidatat, quos proin lorem facilis, sollicitudin! Explicaboconsequat, consequat.consequ
          </p>at,
        </div>

      </div>
      <Enquiry />
      <Address />
      <Footer />
    </div>
  )
};

export default Team;