import logo from '../assets/gd-logo1.png';
import { FaPhoneSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <main className="w-full">
      <div className="main_image ">
        <div className="max-w-[1200px] mx-auto pt-16">
          <div className=" grid place-items-end">
            <div className="flex item-center gap-4 justify-center">
              <FaPhoneSquare size={20} color="white" />
              <p className=" text-white tracking-widest font-medium">
                <a href="tel:+919599277565">+91-9599277565</a>
              </p>
            </div>
          </div>
          <div className="md:grid gap-7 md:gap-0 flex flex-col md:grid-cols-2 mt-8 ">
            <div>
              <img src={logo} width="80px" height="80px" alt="/" />
            </div>
            <div className="flex px-6 min-h-[70px] border uppercase border-[#ff7a3d] items-center justify-between text-white font-medium text-base bg-black opacity-[0.7]">
              <a className="text-[#ff7a3d]  " href="#">
                Home
              </a>
              <a className="hover:text-[#ff7a3d] " href="#about">
                About Us
              </a>
              <a className="hover:text-[#ff7a3d] " href="#team">
                Team
              </a>
              <a className="hover:text-[#ff7a3d] " href="#project">
                Project
              </a>
              <a className="hover:text-[#ff7a3d] " href="#contact">
                Contact US
              </a>
            </div>
          </div>

          <div className=" text-white px-5 md:px-0 pt-52">
            <h1 className="md:text-[5rem] text-[3rem] tracking-tight font-bold">
              Grace Decor Interior
            </h1>
            <h1 className="md:text-[5rem] text-[3rem] leading-[80px] font-bold">
              Construction.
            </h1>
            <p className="mt-16 text-wrap w-[300px] md:w-[600px]">
              – Ullam, tenetur aliqua nibh pretium potenti habitantelit irure
              quas eligendi, tempore torquent lectus dolore!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
