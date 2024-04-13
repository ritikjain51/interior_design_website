import Card from './Card';
import { FaPhoneSquare } from 'react-icons/fa';
const Enquiry = () => {
  return (
    <div className="full_bg  w-full mb-32 ">
      <div className="max-w-[1200px] mx-auto flex flex-col md:grid md:grid-cols-2 ">
        <div className="mx-auto">
          <Card heading1={'Excellent City'} heading2={'Location'} />
        </div>
        <div className="pt-20 ml-12 md:ml-0">
          <div className="w-[100%] flex flex-col gap-3  justify-center mx-auto ">
            <FaPhoneSquare color="white" size={30} />
            <h1 className="text-2xl font-bold text-white">
              For Further Inquiries Call
            </h1>
            <h1 className=" text-[#f6f7f8] pb-5 pt-3 text-4xl tracking-widest font-extrabold">
            <a href="tel:+919599277565">+91-9599277565</a>
            </h1>
            <p className="text-lg font-normal text-white">
            Get in touch today to start your journey towards an elegantly designed, sustainable space
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
