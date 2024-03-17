import img1 from '../assets/pic28-free-img.jpg';
import img2 from '../assets/pic06-free-img.jpg';
import img3 from '../assets/pic07-free-img.jpg';

const ShowCase = () => {
  return (
    <div
      id="project"
      className="max-w-[1200px] mx-auto mt-28 grid grid-cols-2 md:grid-cols-4 h-auto"
    >
      <div className="bg-[#333333] flex flex-col  justify-center items-center absolute h-full relative">
        <div className=" flex flex-col gap-9 px-6 pt-12 ">
          <h1 className="text-4xl text-white font-bold">
            Our On Going <br /> Projects...
          </h1>
          <div className="border-[0.5px] border-[#ff7a3d] max-w-28"></div>
          <p className="text-base  font-light text-white tracking-wider">
            Alias debitis exercitation habitant accusantium sem! Blandit{' '}
          </p>
        </div>
      </div>
      <div className="hov">
        <img src={img1} alt="/" />
      </div>
      <div className="hov">
        <img src={img3} alt="/" />
      </div>
      <div className="hov">
        <img src={img2} alt="/" />
      </div>
    </div>
  );
};

export default ShowCase;
