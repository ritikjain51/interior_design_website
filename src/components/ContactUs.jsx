import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0 pt-16">
        <div className="text-white px-5 md:px-0 pt-52">
          <h1 className="md:text-[5rem] text-[3rem] tracking-tight font-bold">
            Get In Touch
          </h1>
          <h1 className="md:text-[5rem] text-[3rem] leading-[80px] font-bold">
            Perfectly Positioned Locations & Perfect Sized Properties!
          </h1>
         <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;