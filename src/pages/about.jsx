import React from "react";

import Address from "../components/Address";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Spotlight from "../components/Spotlight";
const About = () => {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle=""
        description=""
        class_name="main_image"
      />
      <div className="flex md:flex-row flex-col px-5 md:px-0 mt-20 gap-16">
        <div className="flex flex-col gap-10 pt-20">
          <div className="border-[0.5px] border-[#ff7a3d] max-w-100"></div>
          <p className="text-base font-light text-black tracking-wider">
            Welcome to Grace Decor, where interior design and construction expertise converge to create elegant,
            sophisticated spaces that fulfill your dreams. With over 5 years of experience in crafting luxurious interiors and
            constructing residential, corporate, and other properties, we pride ourselves on our ability to blend modern amenities
            seamlessly with timeless elegance. Our team of professionals is dedicated to providing sustainable and sophisticated solutions
            that bring your imagination to life, ensuring that every project receives meticulous attention to detail from concept to completion.

            Driven by a passion for innovation and environmental stewardship, we prioritize eco-friendly practices and materials in all our projects, 
            minimizing our footprint while maximizing comfort and functionality. At Grace Decor, we believe in building more than just structures 
            – we create experiences that inspire and delight. Let us transform your space into a sanctuary of style and luxury, where dreams become reality with Grace Decor.
          </p>


        </div>
      </div>
      <Spotlight />
      <Address />
      <Footer />
    </div>
  )
};

export default About;