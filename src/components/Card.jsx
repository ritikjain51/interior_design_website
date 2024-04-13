import { RiArrowRightSLine } from 'react-icons/ri';

const Card = ({ heading1, heading2 }) => {
  return (
    <div className="px-10 h-[390px] flex items-center justify-center hover:scale-105 transition-all w-[435px]  bg-white shadow-[#fa7335] shadow-sm">
      <div className="flex flex-col text-center gap-8">
        <h1 className=" text-[2.5rem] font-normal ">
          {heading1} <br /> {heading2}!
        </h1>
        <p>
          Embracing elegance in design, purpose in construction – where every eco-conscious decision leads us closer to a sustainable tomorrow.
        </p>
        <button className="px-5 flex items-center gap-3 justify-center w-[200px] text-white  mx-auto py-3 rounded-lg bg-[#ff7a3d] transition-all hover:bg-[#3A3A3A]">
          <a href="#project">View Projects</a>
          <RiArrowRightSLine size={25} />
        </button>
      </div>
    </div>
  );
};

export default Card;
