import React from "react";

import Address from "../components/Address";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <div className="w-full">
      <Hero
      title="Contact Us"
      subtitle=""
      description=""
      class_name="main_image"
      />
      <ContactForm />
      <Address />
      <Footer />
    </div>
  )
};

export default Contact;