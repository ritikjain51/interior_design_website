import { ImFacebook2 } from 'react-icons/im';
import { LuTwitter } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  function getYear(){
    return new Date().getFullYear();
  }
  
  return (
    <div className="w-full bg-black h-52 mt-20 border-t-4 border-[#ff7a3d]">
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row max-w-[1200px] mx-auto py-8 justify-between">
        <h2 className="text-white text-lg font-medium">
          Copyright © {getYear()} Construction | Powered by Construction
        </h2>
        <div className="flex  gap-4">
          <ImFacebook2 color="white" size={25} />
          <LuTwitter color="white" size={25} />
          <FaInstagram color="white" size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
