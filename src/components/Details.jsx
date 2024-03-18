import img1 from '../assets/collage07-free-img.png';
import img2 from '../assets/collage08-free-img.png';
import { RiArrowRightSLine } from 'react-icons/ri';

import Card from './Card';

const Details = () => {
  return (
    <div id="team" className="max-w-[1200px] pb-36  mx-auto">
      <div className="md:grid flex flex-col md:grid-cols-2 -mt-52">
        <div></div>
        <div className=" z-40 grid place-items-center md:place-items-end  ">
          <Card heading1={'Designing'} heading2={'Lifestyle'} />
        </div>
      </div>

      <div className="flex md:flex-row flex-col px-5 md:px-0 mt-20 gap-16">
        <img className="" src={img1} alt="/" />
        <div className="flex flex-col gap-10 pt-20">
          <h1 className="text-3xl font-bold">
            Designing Beautiful, Eco-friendly and Green Structures Around the
            City!
          </h1>
          <div className="border-[0.5px] border-[#ff7a3d] max-w-32"></div>
          <p className="text-base font-light text-black tracking-wider">
            Alias debitis exercitation habitant accusantium sem! Blandit
            perspiciatis! Sem reprehenderit. Montes cillum, aliquam nonummy pede
            sociosqu laborum vehicula platea. Arcu. Augue lectus libero alias,
            tincidunt dolore, pulvinar, congue. Velit dictumst rutrum
            voluptatibus! Laboriosam ante labore necessitatibus!
          </p>
          <p className="text-base font-light text-black tracking-wider">
            Praesent risus minim distinctio adipisci cubilia auctor sem felis,
            qui urna facilisis omnis erro.
          </p>
          <button className="px-5 flex items-center gap-3 max-w-[200px] text-white justify-center mt-10  py-3 rounded-lg bg-[#ff7a3d] transition-all hover:bg-[#3A3A3A]">
            <a href="#project">View Projects</a>
            <RiArrowRightSLine size={25} />
          </button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col mt-52 gap-16">
        <div className=" flex w-full ">
          <div className="w-[70%] flex flex-col gap-10 justify-center mx-auto">
            <h1 className="text-3xl font-bold">
              Properties with <br />
              Meticulous Details.
            </h1>
            <div className="border-[0.5px] border-[#ff7a3d] max-w-32"></div>
            <p className="text-base  font-light text-black tracking-wider">
              Alias debitis exercitation habitant accusantium sem! Blandit
              perspiciatis! Sem reprehenderit. Montes cillum, aliquam nonummy
              pede sociosqu laborum vehicula platea. Arcu. Augue lectus libero
              alias, tincidunt dolore, pulvinar, congue.
            </p>
          </div>
        </div>
        <img className="px-5 md:px-0" src={img2} alt="/" />
      </div>
    </div>
  );
};

export default Details;
