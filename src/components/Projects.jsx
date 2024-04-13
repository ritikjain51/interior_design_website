import img1 from '../assets/delhi.jpg';
import img2 from '../assets/dehradun_tower.jpg';
import img3 from '../assets/agra.jpg';
import "../project.css";


const Projects = () => {
  return (
    <div
      id="project"
      className="max-w-[1200px] mx-auto mt-28 grid grid-cols-2 md:grid-cols-4 h-auto"
    >
      <div className="bg-[#333333] flex flex-col  justify-center items-center absolute h-full relative">
        <div className=" flex flex-col gap-9 px-6 pt-12 ">
          <h1 className="text-4xl text-white font-bold">
            Our Presence
          </h1>
          <div className="border-[0.5px] border-[#ff7a3d] max-w-28"></div>
          <p className="text-base  font-light text-white tracking-wider">
            We are present in multiple cities and keep expanding our presence across the nation
          </p>
        </div>
      </div>
      <div className="container">
        <div className='overlay'>
        <p class="text">Delhi-NCR</p>
        </div>
        <img src={img1} alt="/" class="image" />
      </div>
      <div className="container">
        <div className='overlay'>
        <p class="text">Dehradun</p>
        </div>
        <img src={img2} alt="/" class="image" />
      </div>
      <div className="container">
        <div className='overlay'>
        <p class="text">Agra</p>
        </div>
        <img src={img3} alt="/" class="image" />
      </div>
    </div>
  );
};

export default Projects;
